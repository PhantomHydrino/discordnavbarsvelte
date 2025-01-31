<script>
    import Icon from "@iconify/svelte";
</script>

<div class="flex h-[100vh] w-[100vw] bg-gray-800 justify-center items-center">
    <Icon
        icon={"simple-icons:discord"}
        class="text-gray-950 text-[30vh] drop-shadow-lg"
    />
    <!-- <Icon
        icon={"eos-icons:atom-electron"}
        class="text-gray-800 fixed -top-[46vh] -right-[23vw] w-[100vh] h-[100vh] 
           filter drop-shadow-[0px_0px_10px_rgba(0,20,0,0.3)] 
           animate-[spin_10s_ease-in-out_infinite] invisible lg:visible"
    /> -->
    <Icon
    icon="eos-icons:atom-electron"
    class="text-teal-950 fixed -top-[46vh] -right-[23vw] w-[100vh] h-[100vh] animate-[spin_10s_ease-in-out_infinite] invisible text-teal-950 font-bold text-shadow-custom  lg:visible"
    />
</div>
