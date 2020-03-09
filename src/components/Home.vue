<template>
  <div class="home-wrapper">
    <div class="home-header">
      <div class="home-header-title">
        Заметки
      </div>
    </div>

    <div class="control-panel">
      <router-link :to="{ path: 'new_note' }">
        Добавить заметку
      </router-link>
    </div>

    <div class="notes-werapper">
      <note-card :note="note" v-for="(note, index) in notes" :key="index" @delete-note="deleteNote"></note-card>
    </div>
  </div>
</template>

<script>
import NoteCard from '@/components/NoteCard'

export default {
  name: 'Home',
  components: {
    NoteCard
  },
  data () {
    return {
      notes: []
    }
  },
  mounted () {
    this.getAllNotes()
  },
  methods: {
    getAllNotes () {
      this.$http.get(`http://127.0.0.1:5009/notes/all`)
        .then(function (response) {
          if(response.status === 200) {
            this.notes = response.body.note
          }
          else {
            alert('Ошибка !')
          }
        })
        .catch(function() {
          alert('Ошибка !')
        })
    },
    deleteNote (delete_note) {
      this.$http.delete(`http://127.0.0.1:5009/notes/${delete_note.id}`)
        .then(function(response) {
          if(response.status === 200) {
            this.notes = this.notes.filter(function(note) {
              if(note.id !== delete_note.id) return true
              else return false
            })
          }
          else {
            alert('Ошибка !')
          }
        })
        .catch(function() {
          alert('Ошибка')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  
  .home-header {
    margin: 20px 0;

    .home-header-title {
      font-size: 20px;
    }
  }
  .control-panel {
    margin: 20px 0 30px 0;
  }
  .notes-werapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
