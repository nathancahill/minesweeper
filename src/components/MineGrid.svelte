<script>
    import { createGrid } from '../grid.js'
    import Cell from './Cell.svelte'

    export let width = 9
    export let height = 9
    export let mines = 10

    let ended = false

    $: grid = createGrid(width, height, mines)

    const handleEnd = () => {
        ended = true
    }
</script>

<div class="table border-collapse">
    {#each grid as row}
        <div class="flex table-row">
            {#each row as value}
                <Cell {value} {ended} on:end={handleEnd} />
            {/each}
        </div>
    {/each}
</div>
