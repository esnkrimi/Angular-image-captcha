# EsnImageCaptcha
#ANGULAR 

Image captcha using angular and konvaJs .

----------------------------DEMO

https://esn-image-captcha.stackblitz.io

https://stackblitz.com/edit/esn-image-captcha


----------------------------INSTALLATION

        npm i esn-image-captcha --force

        and in app.module

        import {EsnImageCaptchaModule } from 'esn-image-captcha'

----------------------------NOTE

Firstly,You must install konva 

        npm i konva

----------------------------USAGE

----------------HTML FILE

        <esn-image-captcha
        [data]="data"
        (result)="result($event)"
        >    
        </esn-image-captcha>

----------------TS FILE

        data = {
                captchaImageAddress: 'assets/myCaptchaImage.jpg',
                width: 300,//outer panel width
                height: 200,//outer panel height
                clipWidth:100,//inner panel width
                cliHeight:200,//inner panel height
                precision:100,//1 to 100 . 10 is fit
            }