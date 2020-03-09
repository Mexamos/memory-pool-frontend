<template>
  <div class="note-card-wrapper">
    
      <div class="note-header">
        <router-link :to="{ name: 'note', params: { note_id: note.id }}">
        <div class="note-title" v-if="note.title">
          {{ note.title }}
        </div>
        </router-link>

        <div class="delete-button" @click="deleteNote">
          x
        </div>
      </div>

      <div class="note-body-wrapper">
        <div class="note-body" v-if="note.text">
          {{ note.text }}
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  props: [
    'note'
  ],
  methods: {
    deleteNote () {
      this.$emit('delete-note', this.note)
    }
  }
}
</script>

<style lang="scss" scoped>
.note-card-wrapper {
  border: 1px solid;
  padding: 10px;
  border-radius: 3px;
  margin: 0 10px 20px 0;
  max-width: 300px;
  min-width: 200px;
  min-height: 200px;;

  .note-header {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    .note-title {
      font-size: 16px;
      cursor: pointer;
    }
    .delete-button {
      width: 18px;
      height: 18px;
      border: 1px solid;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
.note-card-wrapper:hover {
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  transition: .2s;
}
</style>