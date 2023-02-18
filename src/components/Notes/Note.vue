<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small> {{ characterLength }} </small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item">Edit</a>

            <a
              @click="DelNote(index)"
              class="card-footer-item"
            >
                Delete
            </a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const characterLength = computed(() => {
    length = props.note.content.length;
    let description = props.note.content.length > 1 ?
    'characters' : 'character'

    return `${props.note.content.length} ${description}` 
})

</script>
