import { ToastController } from "@ionic/angular";

export class ToastBuilder {

    constructor(private taostCtrl:ToastController){

    }


    async bluidLoginSuccessToast(name:string){
        
        let toast = await this.taostCtrl.create({
            message:"Bienvenue "+name+" !",
            duration:1500,
            position:"top",
            mode:"ios",
            color:"light",
            icon:"person",
        });

        await toast.present();

    }

}