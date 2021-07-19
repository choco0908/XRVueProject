<template>
  <div class="mainscene">
    <a-scene id="scene" embedded>
      <a-assets>
        <a-asset-item
          id="woman"
          src="https://cdn.glitch.com/ab997f9d-4318-48ff-8411-dd95e9efbcf2%2Fwooman.glb?v=1625667322099"
        >
        </a-asset-item>
        <a-asset-item
          id="man"
          src="https://cdn.glitch.com/ab997f9d-4318-48ff-8411-dd95e9efbcf2%2Fman.glb?v=1625667336453"
        >
        </a-asset-item>
        <a-asset-item
          id="tinycity"
          src="https://cdn.glitch.com/ab997f9d-4318-48ff-8411-dd95e9efbcf2%2Fscene.gltf?v=1626014170937"
        >
        </a-asset-item>
        <a-asset-item
          id="santa"
          src="https://cdn.glitch.com/ab997f9d-4318-48ff-8411-dd95e9efbcf2%2Fsanta.gltf?v=1626015182547"
        >
        </a-asset-item>
      </a-assets>
      <a-camera id="camera" look-controls position="-1 1 0">
        <a-entity
          cursor="fuse: true; fuseTimeout: 500"
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.01"
          material="color: black; shader: flat"
        >
        </a-entity>
      </a-camera>
    </a-scene>
  </div>
</template>
<script>

export default {
/* eslint-disable */
    name: 'Aframe',
    mounted() {
        const city = document.createElement('a-entity')
        city.setAttribute('id', 'city')
        city.setAttribute('gltf-model', '#tinycity')
        city.setAttribute('position', '3 1.1 2.5')
        city.setAttribute('scale', '0.01 0.01 0.01')
        document.getElementById('scene').appendChild(city)
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mainscene {
  width: 100%;
  height: 60vh;
}
</style>
