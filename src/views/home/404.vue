<template>
  <v-app id="error">
    <v-container
      fluid
      fill-height
    >
      <v-layout
        align-center
        justify-center
        row
      >
        <div class="text-md-center">
          <h1 class="errorCode">404</h1>
          <h2 class="errorText">Desculpe, essa página não existe.</h2>
          <div>
            <v-btn
              color="primary"
              class="errorButton"
              to="/"
            >
              Ir para Home
            </v-btn>
          </div>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>
<style>
  .d {
    margin: 0 auto;
    width: 25% !important;
  }
  .errorCode {
    text-align: center;
    vertical-align: middle;
    font-size: 170px;
    line-height: 170px;
    font-weight: 800;
    color: #424242 ;
    text-shadow: rgba(61,61,61,.3) 1px 1px, rgba(61,61,61,.2) 2px 2px, rgba(61,61,61,.3) 3px 3px;
  }
  .errorText{
    text-align: center;
    font-size: 25px !important;
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 600px) {
    .errorButton{
      margin: auto;
      display: block;
    }
  }
</style>
