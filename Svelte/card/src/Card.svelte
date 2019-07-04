<script>
  export let image
  export let description
</script>

<style>
  section {
    width: 250px;
    height: 350px;
  }
  img {
    width: 250px;
    height: 250px;
  }
  p {
    font-size: 22px;
    text-align: center;
  }
</style>

<section>
  <img src={ image } alt="Logo">
  <p>{ description }</p>
</section>