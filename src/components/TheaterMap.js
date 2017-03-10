var React = require('react')
var ReactGMaps = require('react-gmaps')
var {Gmaps, Marker} = ReactGMaps

var theaters = require('../data/theatres.json')

var TheaterMap = React.createClass({
  render: function() {
    return (
      <div className="map col-sm-12">
        <Gmaps width={'100%'}
               height={'480px'}
               lat={'41.9021988'}
               lng={'-87.6285782'}
               zoom={11}
               loadingMessage={'Theaters soon...'}
               params={{v: '3.exp', key: 'AIzaSyB3p_xQIXsFMDGLYNEiVkgW5fsVSUOd01c'}}>
           {theaters.map(function(theater) {
             return <Marker lat={theater.lat} lng ={theater.long} />
         })}
        </Gmaps>
      </div>
    )
  }
})

module.exports = TheaterMap
