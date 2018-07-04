<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" >
      <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
            <v-radio label="Bahamas, The" value="bahamas"></v-radio>
            <v-radio label="Bahrain" value="bahrain"></v-radio>
            <v-radio label="Bangladesh" value="bangladesh"></v-radio>
            <v-radio label="Barbados" value="barbados"></v-radio>
            <v-radio label="Belarus" value="belarus"></v-radio>
            <v-radio label="Bahamas, The" value="bahamas"></v-radio>
            <v-radio label="Bahrain" value="bahrain"></v-radio>
            <v-radio label="Bangladesh" value="bangladesh"></v-radio>
            <v-radio label="Barbados" value="barbados"></v-radio>
            <v-radio label="Belarus" value="belarus"></v-radio>
            <v-card-text>test</v-card-text>

            <v-card-text>test</v-card-text>

            <v-card-text>test</v-card-text>

            <v-card-text>test</v-card-text>

            <v-card-text>test</v-card-text>

            <v-card-text>test</v-card-text>



            <v-card-text>test</v-card-text>

            <v-card-text>test</v-card-text>



            <v-card-text>test</v-card-text>

            
            
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
content_copy
<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false
      }
    }
  }
</script>