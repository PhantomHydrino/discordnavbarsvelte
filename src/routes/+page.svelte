<script>
    
    import MainScreen from './components/mainScreen/MainScreen.svelte';
    import SideBar from './components/sidebar/SideBar.svelte';
    import "../app.css";
</script>

<svelte:head>
	<title>Discord Nav Concept</title>
</svelte:head>

<div class="page-container">
    <MainScreen/>
    <SideBar/>
</div>

<style>
    .page-container {
      display: flex;  /* Flexbox to align the MainScreen and SideBar */
    }
</style>