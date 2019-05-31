class Phone {
    
    
    constructor(tag, options) {
        
        this.name = "";
        var options = options;
        var tag = tag;
       
        if(tag){
            const selectid = document.querySelector(tag);
            if(selectid){
              
                var div = document.createElement('div');
                if(options.device){
                    this.name = options.device;
                    div.setAttribute('class','device device-'+this.name);
                    var devicewidth = div.offsetWidth;
                }else{
                    this.name= "iphone-x";
                    div.setAttribute('class','device device-'+this.name);
                    var devicewidth = div.offsetWidth;
                }

                this.deviceframe = document.createElement('div');
                this.deviceframe.setAttribute('class','device-frame');

                this.devicecontent = document.createElement('div');
                this.devicecontent.setAttribute('class','device-content');

                var devicestripe = document.createElement('div');
                devicestripe.setAttribute('class','device-stripe');

                var deviceheader = document.createElement('div');
                deviceheader.setAttribute('class','device-header');

                var devicesensors = document.createElement('div');
                devicesensors.setAttribute('class','device-sensors');

                var devicebtns = document.createElement('div');
                devicebtns.setAttribute('class','device-btns');

                var devicepower = document.createElement('div');
                devicepower.setAttribute('class','device-power');

                var devicehome = document.createElement('div');
                devicehome.setAttribute('class','device-home');



                selectid.appendChild(div);
                div.appendChild(this.deviceframe);
                this.deviceframe.appendChild(this.devicecontent);
                if(options.src){
              
                    this.devicecontentinner = document.createElement('iframe');
                    this.devicecontentinner.setAttribute('class','device-content');
                    this.devicecontentinner.src = options.src;
                    this.devicecontent.appendChild(this.devicecontentinner);
                  
                    
                }

              
                div.appendChild(devicestripe);
                if(!(options.width) || !(options.height)){
                    div.appendChild(deviceheader);
                    }else{
                        div.appendChild(deviceheader);
                    }
                   
            
                div.appendChild(devicesensors);
                if(!(options.width) || !(options.height)){
                    div.appendChild(devicebtns);
                }
               
                
                div.appendChild(devicepower);
                div.appendChild(devicehome);
                
      

                  if(options.width){
                    
                      
                    var widthchangeratio =  (options.width/div.offsetWidth).toFixed(2);
                    var divfirstwidth = div.offsetWidth;
                    var deviceheaderfirstwidth = deviceheader.offsetWidth;
                    div.style.width = options.width;
                    this.deviceframe.style.width = options.width;
                    this.devicecontent.style.width = options.width;
                    this.devicecontentinner.style.width = options.width;
                    devicestripe.style.width = devicestripe.offsetWidth*widthchangeratio;
                    //deviceheader.style.width = "unset";
                    devicesensors.style.width = devicesensors.offsetWidth*widthchangeratio;
                    devicebtns.style.width = devicebtns.offsetWidth*widthchangeratio;
                    devicepower.style.width = devicepower.offsetWidth*widthchangeratio;
                    devicehome.style.width = devicehome.offsetWidth*widthchangeratio;
                    var deviceheaderbefore =  getComputedStyle(deviceheader, '::before');
                 
                }

                if(options.height){
                    var heightchangeratio =  (options.height/div.offsetHeight).toFixed(2);
                    var divfirstheight = div.offsetHeight;
                    var deviceheaderfirstheight = deviceheader.offsetHeight;
                    div.style.height = options.height;
                    this.deviceframe.style.height = options.height;
                    this.devicecontent.style.height = options.height;
                    this.devicecontentinner.style.height = options.height;
              
                }

               


               }
        
        }
    
        
        }

    changesrc(newsrc){
       

        this.devicecontentinner.src = newsrc;
    }

  }

 
    
export default Phone;