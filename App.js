
import React, { Component, useCallback, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Alert, SafeAreaView, TouchableOpacity, ScrollView, Image, ImageBackground, FlatList } from 'react-native';
import { render } from 'react-dom';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { TextInputMask } from 'react-native-masked-text';
import {
  BackAndroid,
} from 'react-native';


//loading start aplication class
class LoadingInicial extends Component{
  state = {
    loaded: false
  }

  constructor(props) {
    super(props);
    this.load(v => this.setState({loaded: true}));
    
  }
  render(){
    return(
      <View>
        {this.state.loaded ? this.props.navigation.navigate('EntrarApp') : 
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ImageBackground source={require('./assets/iconesAppPosto/logo.jpeg')} 
            
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: 500,
              height: 500,
              
              
              

            }} >
            </ImageBackground>
          </View>
        
        }
      </View>
    );
  }
  //funcao que define o tempo do loading quando inicia o app 3 segundos
  load(cb){
    setTimeout(cb, 3000);
  }
}
//end class start aplication loading

//---original pra baixo

class EntrarApp extends Component{
  constructor(props) {
    super(props);
    //this.testarConexao();
    
  }

  
  render(){
    return(
      <View style={{flex: 1}}>

        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <ImageBackground source={require('./assets/iconesAppPosto/logo.jpeg')} 
            
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: 500,
              height: 500,
              marginTop: -70,
              
              
              

            }} >
          </ImageBackground>

        </View>

        <View style={{height: 300,justifyContent:'center',backgroundColor: 'transparent'}}>
          <View style={{margin: 20}}>
            <Button color='#ff6961' title='Cadastre-se' onPress={() => this.props.navigation.navigate('Cadastro')}></Button>
          </View>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{marginTop: 10, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{
              fontWeight: 'bold'
            }}>Entrar</Text>
          </TouchableOpacity>


        </View>
        
        

      </View>
      
    );
  }

  testarConexao = () => {

    const url1 = 'http://35.198.48.76/msgservidor.php';


    
    fetch(url1)
  
      .then((response) => response.json())
      .then((res) => {
        alert(res.message)
        //console.warn(res.message)
        
        
      })

  }
  

}



class ConfigApp extends Component{

  render(){
    return(
      <View style={{flex: 1, margin:5}}>

        <View style={{flex:1, alignItems:'flex-start', marginTop: 20}}>
          <TouchableOpacity style={Styles.btnConfigApp}>
            <Text>Contato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.btnConfigApp}>
            <Text>Endereço</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.btnConfigApp}>
            <Text>Notificações</Text>
          </TouchableOpacity>
        
          
          
          
          
          
          

        </View>

        
          

      </View>
      
    );
  }
  

}



//configuração de usuario na tela home
class ConfigUsuarioContato extends Component{
  constructor(props) {
    super(props);
    
  }

  
  render(){
    return(
      <View style={{flex: 1}}>

        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text>Alterar Nome:</Text>
          <TextInput style={{borderWidth:0.5}}></TextInput>  
        </View>

        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text>Alterar Email:</Text>
          <TextInput style={{borderWidth:0.5}}></TextInput>  
        </View>

        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text>Alterar Número do Celular:</Text>
          <TextInput style={{borderWidth:0.5}}></TextInput>  
        </View>
          

      </View>
      
    );
  }
  

}

//END class ConfigUsuario -descriçãoc: configurações de usuario na tela de login




//***********************************HOME**************************************//

class HomeScreen extends Component{
  constructor(props) {
    super(props);
    this.state = { pressStatus1: true, pressStatus2: false, pressStatus3: false, 

      posto1: '',
      precoposto1: '',
      posto2: '',
      precoposto2: '',
      posto3: '',
      precoposto3: '',
      posto4: '',
      precoposto4: '',
      posto5: '',
      precoposto5: '',
      posto6: '',
      precoposto6: '',
      posto7: '',
      precoposto7: '',
      posto8: '',
      precoposto8: '',
      posto9: '',
      precoposto9: '',
      posto10: '',
      precoposto10: '',
      posto11: '',
      precoposto11: '',
      posto12: '',
      precoposto12: '',
      posto13: '',
      precoposto13: '',
      posto14: '',
      precoposto14: '',
      posto15: '',
      precoposto15: '',
      posto16: '',
      precoposto16: '',
      posto17: '',
      precoposto17: '',
      posto18: '',
      precoposto18: '',
      posto19: '',
      precoposto19: '',
      posto20: '',
      precoposto20: '',
      posto21: '',
      precoposto21: '',
      posto22: '',
      precoposto22: '',
      posto23: '',
      precoposto23: '',
      
    
    };
    this.loading();
    
  
     
  }
  
  render(){
    //this.teste();

    return(
      <View style={{flex: 1}}>
        <View style={{
          flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',backgroundColor: '#ff6961', borderWidth: 0.4, borderColor: 'gray'}}>
          <Text style={{color: 'white',fontSize: 20, marginTop: 30}}>Ipatinga MG, Brasil</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ConfigApp')} style={{marginTop: 30 ,marginRight: 0, marginLeft: 30,borderRadius:2,padding:5}}>
              <Image
                style={{width: 25, height: 25}}
                source={require('./assets/iconesAppPosto/engrenagem.png')}
              />
            </TouchableOpacity>
        </View>

        <View style={{flex:.4, alignItems:"center",flexDirection: 'row'}}>

            <TouchableOpacity onPress={() => {
              
                this.setState({pressStatus1:true,pressStatus2: false, pressStatus3: false})
        
            }} activeOpacity={1}
                style={
                    this.state.pressStatus1
                        ? {marginRight: 25,borderBottomWidth:0.5,padding:5}
                        : {marginRight: 25,padding:5}
                }
                
                >
              <Text>Postos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => 
              this.setState({pressStatus2: true, pressStatus1:false, pressStatus3: false})
            } activeOpacity={1}
                style={
                    this.state.pressStatus2
                        ? {marginRight: 25,borderBottomWidth:0.5,padding:5}
                        : {marginRight: 25,padding:5}
                }
                
                >
              <Text>Promoções</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>
              this.setState({pressStatus1: false,pressStatus2:false,pressStatus3:true})
            } activeOpacity={1}
                style={
                    this.state.pressStatus3
                        ? {marginRight: 25,borderBottomWidth:0.5,padding:5}
                        : {marginRight: 25,padding:5}
                }
                
                >
              <Text>Mais Proximo</Text>
            </TouchableOpacity>


          </View>

        <View style={{flex: 5,backgroundColor:'#ffffff'}}>
          <ScrollView>
            <View style={{flex: 1 ,borderColor: 'black', margin: 20}}>
                
                <View style={Styles.containerInforPostos}>

                  <TouchableOpacity style={{paddingRight: 30}}>
                    <Text>{this.state.posto1}</Text>
                    <Text>Gasolina: R$ {this.state.precoposto1}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity>
                    <Image
                      style={{width: 50, height: 50}}
                      source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                    />

                  </TouchableOpacity>
                
                
                </View>
                

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto2}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto2}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto3}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto3}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto4}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto4}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>



              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto5}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto5}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>


              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto6}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto6}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto7}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto7}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto8}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto8}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto9}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto9}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto10}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto10}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto11}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto11}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto12}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto12}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto13}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto13}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto14}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto14}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto15}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto15}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto16}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto16}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto17}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto17}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto18}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto18}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto19}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto19}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto20}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto20}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto21}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto21}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto22}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto22}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto23}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto23}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

              <View style={Styles.containerInforPostos}>

                <TouchableOpacity style={{paddingRight: 30}}>
                  <Text>{this.state.posto24}</Text>
                  <Text>Gasolina: R$ {this.state.precoposto24}</Text>
                  
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/iconesAppPosto/logoVeraneio.jpg')}
                  />

                </TouchableOpacity>
              
              
              </View>

            </View >
            
              
                

                
          </ScrollView>

        </View>


      </View>
      
    );
  }

  loading = () => {
    fetch('http://35.198.48.76/phpcodes/loadingHome.php',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
        },
          body: JSON.stringify({
            key: 'teste',
            
          })
    
        })
    
        .then((response) => response.json())
        .then((res) => {
          //alert(res.p0)
          this.setState({posto1: res.p0[0], precoposto1: res.p0[1]})
          this.setState({posto2: res.p1[0], precoposto2: res.p1[1]})
          this.setState({posto3: res.p2[0], precoposto3: res.p2[1]})
          this.setState({posto4: res.p3[0], precoposto4: res.p3[1]})
          this.setState({posto5: res.p4[0], precoposto5: res.p4[1]})
          this.setState({posto6: res.p5[0], precoposto6: res.p5[1]})
          this.setState({posto7: res.p6[0], precoposto7: res.p6[1]})
          this.setState({posto8: res.p7[0], precoposto8: res.p7[1]})
          this.setState({posto9: res.p8[0], precoposto9: res.p8[1]})
          this.setState({posto10: res.p9[0], precoposto10: res.p9[1]})
          

        
        })
        .done();
        
        
        
  }

  teste = () => {
    alert(this.state.posto1)
    alert(this.state.precoposto1)
    alert(this.state.posto2)
    alert(this.state.precoposto2)

  }

  
  
}


//***********************************END HOME***************************************//



class TelaLogin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      usuarioEmail: '',
      senha: '',

    };
  }
  
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flex:.8, justifyContent:'center', alignItems:'center',marginBottom: 60}}>
          <Text style={{flex: .4, fontSize: 45, color: '#ff6961', marginTop: 40}}>Entrar</Text>

          <View>
            <Text></Text>
          </View>

          <TextInput
            value={this.state.usuarioEmail}
            placeholder="   Email"
            keyboardType="email-address"
            style={{height: 40, borderStyle:'solid', borderBottomWidth: 1,
            width: 250, borderRadius: 10, marginBottom: 0, borderBottomColor: '#ff6961'}}
            onChangeText={(usuarioEmail) => this.setState({usuarioEmail})}
            
          />

          
          <TextInput
            value={this.state.senha}
            placeholder="   Senha"
            secureTextEntry={true}
            password={true}
            style={{height: 40, borderStyle:'solid', borderBottomWidth: 1,
            width: 250, borderRadius: 10, marginBottom: 0, borderBottomColor: '#ff6961'}}
            onChangeText={(senha) => this.setState({senha})}
            
          />
        </View>


        <View style={{flex: .5, margin: 50, justifyContent: 'center'}}>
          <Button color='#ff6961' onPress={this.login} title="Entrar" style={{}}></Button>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')} style={{marginTop: 25}}>
            <Text style={{textAlign: "center", color: '#ff6961'}}>Primeiro acesso? Clique aqui</Text>
          </TouchableOpacity>
        </View>

      </View>
      
      
      
    );
  }

    //enviar inputs no backend e retornar informação em res
    
    login = () => {

      //experimental
      var Usr = this.state.usuarioEmail;
      var Sen = this.state.senha;
      
      fetch('http://35.198.48.76/phpcodes/login.php',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', 
      },
        body: JSON.stringify({
          key: 'teste',
          usuario: Usr,
          senha: Sen,
          
        })
  
      })
  
      .then((response) => response.json())
      .then((res) => {
        //alert(res.message);
        
        if(res.message == '1'){
          this.props.navigation.navigate('Home');
        }else{
          alert(res.message);
        }
        
      })
      .done();
    }

    

}


//--------------------------------CADASTRO USUARIO FORM 1 -------------------------\\

class CadastrarUsuarioFormulario1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      dataNasc: '',
      cpf: '',
      Senha1: '',
      Senha2: '',

    };
  }

  render(){
    return(
      <ScrollView>

        
        <View style={{flex: 1}}>
          <View style={{flex: 0.5, justifyContent:'center', alignItems:'center'}}>
            <Text></Text>
          </View>

          <View style={{flex: 3, margin: 20}}>
            <View style={{}}>
              <TextInput onChangeText={(nome) => this.setState({nome})} placeholder="  Nome" placeholderTextColor="black" style={{borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
            </View>

            <View>
              <TextInputMask type={'datetime'} options={{format: 'DD/MM/YYYY'}} value={this.state.dataNasc} onChangeText={text => {this.setState({dataNasc: text})}} ref={(dataNasc) => this.datetimeField = dataNasc} placeholder="  Data de Nascimento" placeholderTextColor="black" style={{borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInputMask>
            </View>

            <View>
              <TextInputMask type={'cpf'} value={this.state.cpf} includeRawValueInChangeText={true} onChangeText={(maskedText, rawText) => {this.setState({cpf: rawText})}} ref={(cpf) => this.cpfField = cpf} placeholder="  CPF" placeholderTextColor="black" style={{borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInputMask>
            </View>

            <View>
              <TextInput onChangeText={(Senha1) => this.setState({Senha1})} secureTextEntry={true} placeholder="  Defina um Senha" placeholderTextColor="black" style={{borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
            </View>

            <View>
              <TextInput onChangeText={(Senha2) => this.setState({Senha2})} secureTextEntry={true} placeholder="  Confirmação da senha" placeholderTextColor="black" style={{borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
            </View>
            
          </View>
          
          <View style={{flex: 1, justifyContent:'center', margin: 20, marginTop: 100}}>
            <View>
            <Button color='#ff6961' title="Continuarr" onPress={() => this.SubmitFormCadastro1()/*() => this.props.navigation.navigate('Cadastro2')*/}></Button>
            </View>
            
          </View>
          



          
        </View>
      </ScrollView>
      
    );
    
  }
  
  

  SubmitFormCadastro1 = () => {
    const cpfIsValid = this.cpfField.isValid()
    const isValid = this.datetimeField.isValid()
    //console.warn(isValid)
    //console.warn(cpfIsValid)
    if(isValid == false){
      alert("voce inseriu uma data invalida!");
    }else{
      if(cpfIsValid == false){
        alert("o filho digita um cpf valido por favor");
  
      }else{
        var estado = '';
  
        var Nome = this.state.nome;
        var dtn = this.state.dataNasc;
        var cpfUsuario = this.state.cpf;
        var Sen1 = this.state.Senha1;
        var Sen2 = this.state.Senha2;
  
        if(Nome != '' && dtn != '' && cpfUsuario != '' && Sen1 != '' && Sen2 != ''){
          if(Nome.length >= 3){
            if(Sen1 == Sen2){
              if(Sen1.length >= 6){
                estado = 'campos preenchidos';
                //this.props.navigation.navigate('Cadastro2')
                //passando para tela 2 com react navigation levando consigo os states
                this.props.navigation.navigate('Cadastro2', {
                  nome: this.state.nome,
                  dataNasc: this.state.dataNasc,
                  cpf: this.state.cpf,
                  Senha1: this.state.Senha1,
                  Senha2: this.state.Senha2
    
              
                })
    
              }else{
                alert("Senha muito fraca!, Use uma senha mais forte!");
              }
              
            }else{
              alert("Senhas estao diferentes, verifique a senha")
            }
  
          }else{
            alert("O nome precisa ter pelomenos 3 caracteres!");
          }
          
          
        }else{
          estado = 'campos não preenchidos';
          alert(estado);
        }
  
      }

    }
   
  }


}


//-----------------------------END CADASTRO USUARIO FORM 1 -------------------------\\








//--------------------------------CADASTRO USUARIO FORM 2 -------------------------\\

//2 telas para cadastro para ter muita opcoes
class CadastrarUsuarioFormulario2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Email1: '',
      Email2: '',
      telefone: '',
      nome: this.props.navigation.state.params.nome,
      dataNasc: this.props.navigation.state.params.dataNasc,
      cpf: this.props.navigation.state.params.cpf,
      Senha1: this.props.navigation.state.params.Senha1,
      Senha2: this.props.navigation.state.params.Senha2,

      

    };
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 0.5, justifyContent:'center', alignItems:'center'}}>
          <Text></Text>
        </View>

        <View style={{flex: 3, margin: 20}}>
          <View style={{}}>
            <TextInput onChangeText={(Email1) => this.setState({Email1})} placeholder=" Email" placeholderTextColor="black" style={{borderBottomWidth:1,borderBottomColor:'#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
          </View>

          <View>
            <TextInput onChangeText={(Email2) => this.setState({Email2})} placeholder=" Confirmação do Email" placeholderTextColor="black" style={{borderBottomWidth:1,borderBottomColor:'#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
          </View>

          <View>
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={this.state.telefone}
              onChangeText={text => {
                this.setState({
                  telefone: text
                })
              }}
              placeholderTextColor="black"
              placeholder=" Número do Celular"
              style={{borderBottomWidth:1,borderBottomColor:'#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}
            />
          </View>
          

          
        </View>
        
        <View style={{flex: 1, justifyContent:'center',margin: 20}}>
          <View>
          <Button color='#ff6961' title="Prosseguir" onPress={() => this.ValidarEmail()/*this.props.navigation.navigate('Cadastro3')*/}></Button>
          </View>
          
        </View>
        



        
      </View>
      
    );
  }

  ValidarEmail = () => {
    
    var estadoEmail = '';

    var Email1 = this.state.Email1;
    var Email2 = this.state.Email2;

    if(Email1 != '' && Email2 != ''){
      if(Email1 == Email2){

        var text = Email1;
        //console.warn(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          alert("Por favor Digite um Email valido");
          //this.setState({ email: text })    acho que eu nao preciso disso aqui
        }
        
        
        else if(this.state.telefone.length == 15){

          //console.warn("Email VALIDO");
          estadoEmail = "emails ok";
          //console.warn(this.state.telefone.length)
          //this.props.navigation.navigate('Cadastro3');
          this.props.navigation.navigate('Cadastro3', {
            nome: this.state.nome,
            dataNasc: this.state.dataNasc,
            cpf: this.state.cpf,
            Senha1: this.state.Senha1,
            Senha2: this.state.Senha2,
            Email1: this.state.Email1,
            Email2: this.state.Email2,
            telefone: this.state.telefone,

        
          })

        }else{
          alert("Número de telefone incompleto");
        }


      }else{
        estadoEmail = "emails não conferem";
        alert(estadoEmail);
      }
    }else{
      alert("Preencha os campos!");
      
    }
  
  }

    

}


//-----------------------------END CADASTRO USUARIO FORM 2 -------------------------\\




//-----------------------------CADASTRO USUARIO FORM 3 - EMNDEREÇO - -------------------------\\


class CadastrarUsuarioFormulario3 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cep: '',
      dataNasc: this.props.navigation.state.params.dataNasc, 
      cepSemMask: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      unidade: '',
      ibge: '',
      guia: '',

    };
    
  }

  render(){
    return(
      <ScrollView>

      
        <View style={{flex: 1}}>
          <View style={{flex: 0.5, justifyContent:'center', alignItems:'center'}}>
          </View>

          <View style={{flex: 3, margin: 20}}>
            <View style={{}}>
              <TextInputMask type={'only-numbers'} value={this.state.cep} onChangeText={this.validaCep(),(text) => this.setState({cep: text})} placeholder="  CEP" placeholderTextColor="black" style={{paddingLeft: 8 ,borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInputMask>
            </View>

            <View style={{}}>
              <TextInput value={this.state.logradouro} onChangeText={(logradouro) => this.setState({logradouro})} placeholder="  Rua" placeholderTextColor="black" style={{paddingLeft: 8 ,borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
            </View>

            <View style={{}}>
            <TextInputMask type={'only-numbers'} value={this.state.numero} onChangeText={text => { this.setState({ numero: text }) }} placeholder="  Numero" placeholderTextColor="black" style={{paddingLeft: 8 ,borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInputMask>
            </View>

            <View style={{}}>
              <TextInput value={this.state.bairro} onChangeText={(bairro) => this.setState({bairro})} placeholder="  Bairro" placeholderTextColor="black" style={{paddingLeft: 8 ,borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
            </View>

            <View style={{}}>
              <TextInput value={this.state.localidade} placeholder="  Cidade" placeholderTextColor="black" style={{paddingLeft: 8 ,borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
            </View>

            <View style={{}}>
              <TextInput value={this.state.uf} placeholder="  Estado" placeholderTextColor="black" style={{paddingLeft: 8 ,borderBottomWidth:1,borderBottomColor: '#ff6961', margin: 2,fontSize:16, height: 50,borderRadius: 5}}></TextInput>
            </View>
            
          </View>
          
          <View style={{flex: 1, justifyContent:'center',margin: 20,marginTop: 50}}>
            <View>
              <Button color='#ff6961' title="Concluir" onPress={() => this.SubmitFormsUsuario() } style={{margin: 20}}></Button>
            </View>
            
          </View>

        </View>

      </ScrollView>
      
    );
  }

  TraduzirData = (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }


  SubmitFormsUsuario = () => {
    
    var UsrNome = this.props.navigation.state.params.nome;
    var UsrDataNasc = this.TraduzirData(this.state.dataNasc);
    var UsrCpf = this.props.navigation.state.params.cpf;
    var UsrSen1 = this.props.navigation.state.params.Senha1;
    //var UsrSen2 = this.props.navigation.state.params.Senha2;
    var UsrEmail1 = this.props.navigation.state.params.Email1;
    //var UsrEmail2 = this.props.navigation.state.params.Email2;
    var UsrTelefone = this.props.navigation.state.params.telefone;
    var UsrCep = this.state.cepSemMask;
    var UsrRua = this.state.logradouro;
    var UsrNumeroResidencia = this.state.numero;
    var UsrBairro = this.state.bairro;
    var UsrCidade = this.state.localidade;
    var UsrEstado = this.state.uf;
    //alert(UsrDataNasc)
    

    
    
    
    fetch('http://35.198.48.76/phpcodes/CadastrarNovoUsuarioApp.php',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', 
      },
        body: JSON.stringify({
          nome: UsrNome,
          dataNasc: UsrDataNasc,
          cpf: UsrCpf,
          Senha: UsrSen1,
          email: UsrEmail1,
          telefone: UsrTelefone,
          cep: UsrCep,
          rua: UsrRua,
          numero: UsrNumeroResidencia,
          bairro: UsrBairro,
          cidade: UsrCidade,
          uf: UsrEstado,
          
        })
  
    })
  
    .then((response) => response.json())
    .then((res) => {
      //alert(res.message);
      
      if(res.message == '12'){
        this.props.navigation.navigate('Home');
      }else{
        console.warn(res.message);
      }
        
    })
    .done(); 
      
    
  }

  validaCep = () => {
    ////alert(this.state.cep.length);
    
    if(this.state.cep.length == 8){
      this.BuscaCep();
    }
    
  }

  //api ViaCep que responde com um json
  BuscaCep = () => {

    //experimental que virou definitivo - mas isto é uma gambiarra
    var vazio = '';
    var cep = this.state.cep;
    var url = vazio.concat('http://viacep.com.br/ws/', cep, '/json/')
    
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
    },

    })

    .then((response) => response.json())
    .then((res) => {
      //alert(res.uf)
      if(res.erro == true){
        //console.warn("erro");
        alert("cep invalido, Por favor digite um cep valido para prosseguir")

      }else{
        //console.warn("sucess");
        this.setState({ cepSemMask: cep })
        this.setState({ cep: res.cep })
      
        this.setState({ logradouro: res.logradouro })
        this.setState({ bairro: res.bairro })
        this.setState({ localidade: res.localidade })

        this.setState({ uf: res.uf })
        if(this.state.numero == ''){
          alert("preencha o numero")
        }
      }
      
      
      
      
    })
    .done();
    
  }


}

//----------------------------END CADASTRO USUARIO FORM 3 - ENDEREÇO- -------------------------\\




//rotas de navegação
const AppNavigator = createStackNavigator(
  {
    ConfigApp: {
      screen: ConfigApp,
      navigationOptions:  { title: 'Configurações'},
    },

    ConfigUsuarioContato: {
      screen: ConfigUsuarioContato,
      navigationOptions:  { title: 'Informações de Contato'},
    },

    LoadingInicial: {
      screen: LoadingInicial,
      navigationOptions: { title: null,headerLeft: null,header: null },
    },

    Home: {
      screen: HomeScreen,
      navigationOptions:  { title: null,headerLeft: null,header: null },
      
    },
    EntrarApp:{
      screen: EntrarApp,
      navigationOptions:  { title: null,headerLeft: null,header: null },

    },

    Login: {
      screen: TelaLogin,
      navigationOptions:  { title: null,headerLeft: null,header: null },
    },
    Cadastro: {
      screen: CadastrarUsuarioFormulario1,
      navigationOptions:  { title: 'Preencha para entrar'},

    },
    Cadastro2: {
      screen: CadastrarUsuarioFormulario2,
      navigationOptions:  { title: 'Precisamos do seu Email'},
    },
    Cadastro3: {
      screen: CadastrarUsuarioFormulario3,
      navigationOptions:  { title: 'Conclua o cadastro! é rápido'},
    }
  },
  {
    initialRouteName: 'EntrarApp'
  }
);

const AppContainer = createAppContainer (AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>;
      
  }
}

 



//exemplo de como definir o styles separadoo
//Stilo das views onde contem informações dos postos na tela inicial
const Styles = StyleSheet.create({
  containerInforPostos: {
    flex:1,
    flexDirection: "row",
    backgroundColor: '#fffafa',
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
    borderWidth: 0.4,
    borderColor: 'gray',

  },

  btnConfigApp: {
    flex: .1,
    padding: 8,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 20,
  }
});
