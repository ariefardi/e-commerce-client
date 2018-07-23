<template>
    <v-dialog v-model="updateDialog" max-width="50%" >
        <main>
        <div class="container">  
            <form id="formUpdate">
                <fieldset>
                <label for=""> Jersey Name </label>
                <input v-model="itemName" placeholder="ex: Uruguay Home" type="text" tabindex="1" required autofocus>
                </fieldset>
                <fieldset>
                <label for=""> Brand </label>
                <input v-model="brand" placeholder="ex : Nike" type="text" tabindex="2" required>
                </fieldset>
                <fieldset>
                <label for=""> Gender </label>
                <input v-model="gender" placeholder="ex: Men's" type="text" tabindex="3" required>
                </fieldset>
                <fieldset>
                <label for=""> Released </label>
                <input v-model="released" placeholder="ex: 18/19" type="text" tabindex="4" required>
                </fieldset>
                <fieldset>
                <label for="">  Type Jersey </label>
                <input v-model="typeJersey" placeholder="ex: Club/Jacket" type="text" tabindex="4" required>
                </fieldset>
                <fieldset>
                <button @click="updateItem(detailItem._id)" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
        </main>
    </v-dialog>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import {mapState} from 'vuex'
export default {
    data () {
        return {
            itemName: '',
            brand: '',
            gender: '',
            released: '',
            typeJersey: ''
        }
    },
    computed: {
        ...mapState([
            'detailItem'
        ]),
        updateDialog: {
            get () {
            return this.$store.state.updateDialog
            },
            set () {
            this.$store.commit('setUpdateDialog', false)
            }
        }
    },
    methods: {
        updateItem (id) {
            console.log('Update Item', id)
            let obj = {
                itemName : this.itemName,
                price: this.detailItem.price,
                imgSrc: this.detailItem.imgSrc,
                brand : this.brand,
                gender : this.gender,
                released : this.released,
                typeJersey : this.typeJersey
            }
            console.log(obj)
            axios.put('http://localhost:3000/items/update/'+id,obj)
            .then(({data}) => {
                //  let diri = this
                // this.detailItem = data
                console.log(data.updated)
                this.detailItem = data.updated
                swal('berhasil update')
                .then(reload=> {
                    console.log(reload)
                    location.reload()
                })
            })
            .catch(err=> {
                swal(err.message)
            })
        }
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
* {
  margin: 0;
  padding: 10;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

main {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  max-width: 100%;
  height: 100%;
  margin-right: 45%;
  padding: 0;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#formUpdate input[type="text"],
#formUpdate input[type="email"],
#formUpdate input[type="tel"],
#formUpdate input[type="url"],
#formUpdate textarea,
#formUpdate button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#formUpdate {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#formUpdate h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#formUpdate h4 {
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

#formUpdate input[type="text"],
#formUpdate input[type="email"],
#formUpdate input[type="tel"],
#formUpdate input[type="url"],
#formUpdate textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#formUpdate input[type="text"]:hover,
#formUpdate input[type="email"]:hover,
#formUpdate input[type="tel"]:hover,
#formUpdate input[type="url"]:hover,
#formUpdate textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#formUpdate textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#formUpdate button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4CAF50;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#formUpdate button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#formUpdate button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#formUpdate input:focus,
#formUpdate textarea:focus {
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
