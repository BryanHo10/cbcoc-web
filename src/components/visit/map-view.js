import React from "react"

class MapView extends React.Component{
    render(){
        let mapStyling={border:0, width:"85%"};
        return(
            <div className="text-center container-fluid py-3">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.151672056115!2d-117.91099248479073!3d33.8341989806658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd63a407e4653%3A0x24f8fe5ec42b3ed0!2s412+E+Broadway%2C+Anaheim%2C+CA+92805!5e0!3m2!1sen!2sus!4v1552011941541" 
                className="border"
                height="450" 
                frameBorder="0" 
                title="embed-map-cbcoc"
                style={mapStyling} 
                allowFullScreen>
                </iframe> */}
                <iframe src="https://snazzymaps.com/embed/107615" 
                        className="border"
                        height="450" 
                        frameBorder="0" 
                        title="embed-map-cbcoc"
                        style={mapStyling} 
                        allowFullScreen>
                </iframe>
            </div>
        )
    }
}
export default MapView;