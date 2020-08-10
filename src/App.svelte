<style global>
    /*! purgecss start ignore */
    @tailwind base;
    /*! purgecss end ignore */
    @tailwind components;
    @tailwind utilities;
</style>

<script>
    import MineGrid from './components/MineGrid.svelte'
</script>

<div class="h-full flex items-center justify-center">
    <MineGrid width={9} height={9} mines={10} />
</div>
