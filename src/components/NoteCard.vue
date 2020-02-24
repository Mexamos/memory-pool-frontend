<template>
  <div class="note-card-wrapper">
    <router-link :to="{ name: 'note', params: { note_id: note.id }}">
      <div class="note-header">
        <div class="note-title" v-if="note.title">
          {{ note.title }}
        </div>
      </div>

      <div class="note-body-wrapper">
        <div class="note-body" v-if="note.body">
          {{ note.body }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  props: [
    'note'
  ]
}
</script>

<style lang="scss" scoped>
.note-card-wrapper {
  border: 1px solid;
  padding: 10px;
  border-radius: 3px;
  margin: 0 10px 20px 0;
  max-width: 300px;
  cursor: pointer;

  .note-header {
    margin-bottom: 10px;

    .note-title {
      font-size: 16px;
    }
  }
}
.note-card-wrapper:hover {
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  transition: .2s;
}
</style>