<template>
<body>

<div class="container">  
  <form id="contact">
    <h3>Colorlib Contact Form</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
      <input v-model="itemName" placeholder="Item Name" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input v-model="price" placeholder="Price in Number" type="text" tabindex="2" required>
    </fieldset>
    <fieldset class="uploadAlign">
         <progress value="0" max="100" id="uploader"> 0% </progress>
        <input type="file" value="upload" id="fileButton" @change="postImageHandler" >
    </fieldset>
    <fieldset>
        <v-btn flat="" color="green" @click="uploadFile"> submit </v-btn>
        <v-btn flat="" color="red" to="/"> out </v-btn>
    </fieldset>
    <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
  </form>
</div>
</body>

</template>

<script>
import {storageRef} from  '@/firebase/firebase.js'
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data () {
        return {
            itemName: '',
            price: '',
            imgSrc: '',
            file: ''
        }
    },
    methods: {
        postImageHandler () {
            this.file = event.target.files[0]
        },
        uploadFile () {
            // console.log('uploadooo',this.itemName, this.price, this.imgSrc) 
            // console.log(storageRef,'ini siapa')
             
             storageRef.ref('item_photos/'+ this.file.name).put(this.file)
             .then(snapshot=> {
                 console.log(snapshot)
                storageRef.ref('item_photos/'+ this.file.name).getDownloadURL()
                .then(urlResponse=> {
                    swal('Item Has Been Uploaded')
                    // console.log(urlResponse,'ini urlnya coy')
                    this.imgSrc = urlResponse
                    console.log(this.imgSrc)
                        axios.post('http://api-ecommerce.ariefardi.xyz/items',{
                        itemName: this.itemName,
                        price: this.price,
                        imgSrc: urlResponse
                        })
                        .then(data=>{
                            console.log(data)
                        })
                })
             })
        }
    }
}
</script>

<style lang="scss" scoped>
 @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
.uploadAlign {
    align-items: center
}
body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background: #4CAF50;
  display: flex;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#uploader   {
        -webkit-appearance: none;
        width: 50%;
        margin-bottom: 10px;
}
.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4CAF50;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
</style>



