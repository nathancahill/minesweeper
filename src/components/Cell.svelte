<script>
    import { createEventDispatcher } from 'svelte'
    import MineIcon from './MineIcon.svelte'

    const dispatch = createEventDispatcher()

    export let value
    export let ended

    let clicked = false

    const handleClick = () => {
        if (ended) {
            return
        }

        clicked = true

        if (value === 'x') {
            dispatch('end')
        }
    }
</script>

<div
    class="table-cell border border-gray-300 w-8 h-8 p-0 text-center align-middle font-bold"
    class:bg-red-500={clicked && value === 'x'}
    class:cursor-pointer={!ended && !clicked}
    class:cursor-default={ended || clicked}
    on:click={handleClick}
>
    {#if ended || clicked}
        {#if value === 'x'}
            <MineIcon class="inline h-5 w-5" />
        {:else}
            {value}
        {/if}
    {/if}
</div>
