<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>

            </thead>
                <tbody>
                 <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ totalNotesCount }} </td>
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ totalCharactersCount }}</td>
                </tr>
                </tbody>
        </table>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();
const { totalNotesCount, totalCharactersCount } = storeNotes;




</script>