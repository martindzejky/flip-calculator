<script lang="ts">
  import '../app.css';

  const { children } = $props();
</script>

<div class="flex min-h-dvh flex-col bg-background">
  {@render children()}
</div>
