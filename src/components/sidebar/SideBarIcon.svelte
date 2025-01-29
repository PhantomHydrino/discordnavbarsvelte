<script>
    import Icon from "@iconify/svelte";
    export let icon;
    export let text;
</script>

<div class = "sidebar-icon group">
    <Icon icon = {icon} style = "font-size: 20px;"/>
    <span class="sidebar-toolkit group-hover:scale-100">
        {text}
    </span>
</div>