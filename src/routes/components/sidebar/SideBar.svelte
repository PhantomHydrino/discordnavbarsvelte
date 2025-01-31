<script>
    import SideBarIcon from "./SideBarIcon.svelte";
</script>



<div class="fixed h-[35%] bottom-0 m-2 p-2 left-0 flex flex-col border-[1.5px] border-green-700 bg-gray-900 drop-shadow-3xl rounded-3xl justify-center active:h-[80%] transiton-all ease-linear duration-150 lg:hover:h-[80%] transiton-all ease-linear duration-150">
    
    <SideBarIcon icon ="ant-design:home-filled" text="Home"></SideBarIcon>
    <SideBarIcon icon ="el:fire" text="Trending"></SideBarIcon>
    <SideBarIcon icon ="fa-solid:poo" text="Trash"></SideBarIcon>
    <SideBarIcon icon ="eos-icons:rotating-gear" text="Settings"></SideBarIcon>
    <SideBarIcon icon ="ant-design:plus-square-filled" text="Add New"></SideBarIcon>

</div>
