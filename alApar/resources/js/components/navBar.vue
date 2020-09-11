<template>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-12">
          <img src="https://via.placeholder.com/300x75" alt="logo" />
        </div>
        <div class="col-md-6 col-12 align-self-center">
          <div class="row">
            <div class="offset-md-3"></div>
            <div class="col-3">
              <a href="#" class="daxilOl right">Daxil Ol</a>
            </div>
            <div class="col-3">
              <a href="#" class="qeydiyyat">Qeydiyyat</a>
            </div>
            <div class="col-3 align-self-center">
              <button type="button" class="btn btn-success">
                <span class="oi oi-plus"></span>
                <span style="margin-left:5px">Elan Yerləşdir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 75px;
  box-shadow: 2px -1px 20px 0px grey;
}
.right {
  float: right;
}

.daxilOl {
  width: 100%;
  text-align: center;
  background-color: #44b3c7;
  border-radius: 28px;
  border: 1px solid #44b3c7;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 15px 31px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #44b3c7;
}
.daxilOl:hover {
  background-color: #3da1b3;
}
.daxilOl:active {
  position: relative;
  top: 1px;
}

.qeydiyyat {
  width: 100%;
  text-align: center;
  background-color: #48bdb7;
  border-radius: 28px;
  border: 1px solid #44c7c1;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 15px 31px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #2f6627;
}
.qeydiyyat:hover {
  background-color: #359e9b;
}
.qeydiyyat:active {
  position: relative;
  top: 1px;
}
</style>