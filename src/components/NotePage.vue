<template>
  <div class="note-page-wrapper">
    <div class="note-wrapper">
      <input class="note-title" v-model="note.title" placeholder="Введите название">

      <textarea class="note-text" v-model="note.text" placeholder="Введите текст">
      </textarea>
    </div>

    <div class="control-panel">
      <button @click="saveNote">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotePage',
  data () {
    return {
      note: {
        title: '',
        text: ''
      }
    }
  },
  mounted () {
    if(this.$router.currentRoute.path !== '/new_note') {
      this.getNote()
    }
  },
  methods: {
    createNote () {
      this.$http.post('http://127.0.0.1:5009/notes', this.note)
        .then(function(response) {
          if(response.status === 200) {
            this.$router.push({name: 'note', params: {note_id: response.body.id}})
          }
          else {
            alert('Ошибка !')
          }
        })
        .catch(function() {
          alert('Ошибка')
        })
    },
    getNote () {
      this.$http.get(`http://127.0.0.1:5009/notes/${this.$router.currentRoute.params.note_id}`)
        .then(function(response) {
          if(response.status === 200) {
            this.note = response.body.note
          }
          else {
            alert('Ошибка !')
          }
        })
        .catch(function() {
          alert('Ошибка')
        })
    },
    updateNote () {
      this.$http.patch(`http://127.0.0.1:5009/notes/${this.$router.currentRoute.params.note_id}`, this.note)
        .then(function(response) {
          if(response.status === 200) {

          }
          else {
            alert('Ошибка !')
          }
        })
        .catch(function() {
          alert('Ошибка')
        })
    },
    saveNote () {
      if(this.$router.currentRoute.path === '/new_note') {
        this.createNote()
      }
      else {
        this.updateNote()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.note-page-wrapper {

  .note-wrapper {
    border: 1px solid;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    input, textarea {
      border: 0;
      padding: 5px 10px;
      font-size: 14px;
    }
    input:focus, textarea:focus {
      outline: none;
    }
    .note-title {
      height: 10%;
    }
    .note-text {
      height: 90%;
    }
  }
}
</style>