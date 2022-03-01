import React,{Component} from 'react';
import {Button,Icon,Image,Container,Flag,Header,Input,Label,Layout,Segment,Grid,Divider} from 'semantic-ui-react';

class App extends Component{
  render(){
    return(
      <div style ={{marginTop : '20px'}}>
        <Container>
            <Flag name ='id' size='big' />
            <Icon name ='chevron left'  style={{marginLeft : '40px'}} />
            <Icon name ='chevron right' style={{marginLeft : '40px'}} />
            <Input type ='text' placeholder ='Search...' icon ='star' style ={{marginLeft :'40px' ,width :'800px',height:'45px'}} />
            <Image src ='https://react.semantic-ui.com/images/avatar/large/patrick.png' avatar  style ={{marginLeft :'20px',width:'4%',height:'auto'}} />
            <span style = {{marginLeft :'10px'}}><b>Patrick</b></span>
        </Container><br/>
        <Divider horizontal>SELAMAT DATANG !!!!!</Divider>
        <Container textAlign = 'center'>
          <Label as='Sport' color ='teal' tag style={{marginLeft :'1050px'}}>SPORT</Label><br/><br/>
            <p style = {{fontSize :'12pt'}}>Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)?
            Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.
            Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.
            Baca artikel detiksport, "Andai Gugatan Rival Dikabulkan, Ducati Akan Lanjutkan ke CAS?" Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina digelar pada 29-31 Maret mendatang.
            "Andai Gugatan Rival Dikabulkan, Ducati Akan Lanjutkan ke CAS?" "Di dalam federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada MotoGP.com.
            "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda."
            </p>
              <Button content='Tambah Tautan Ke List' icon='plus' color='teal' labelPosition='left' />
        </Container>
      </div>
    )
  }
}

export default App;
