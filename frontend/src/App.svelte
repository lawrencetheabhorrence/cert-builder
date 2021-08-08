<script>
  import { data } from './store.js';
  import { printTemplate } from './services/pdf.js'

  const onClick = (e) => {
    e.preventDefault()
    printTemplate('./template.ejs', $data)
  }
</script>

<svelte:head>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
  crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
</script>
</svelte:head>

<body class="bg-zig-zag">
  <form>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" class="form-control" id="firstname"
        bind:value={$data.firstname}
        placeholder="John">
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input type="text" class="form-control" id="lastname"
          bind:value={$data.lastname}
          placeholder="Doe">
        </div>
        <div class="form-group">
          <label for="course">Course</label>
          <input type="text" class="form-control" id="course"
            bind:value={$data.course}
            placeholder="Infection Busters">
          </div>
          <button class="btn btn-primary" on:click={(e) => {onClick(e)}}>Submit</button>
        </form>
      </body>

<style>
  body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  }

  form {
  background-color: rgba(226, 226, 226, 0.82);
  border: 1px solid rgba(211, 211, 211, 0.82);
  border-radius: 25px;
  box-shadow: 5px 5px 15px 5px #4A6765;
  padding: 30px;
  }
</style>
