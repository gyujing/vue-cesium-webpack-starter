<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import "cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from "cesium";

export default {
  name: "CesiumViewer",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let viewer = new Cesium.Viewer("cesiumContainer");

      // 一个图像层,它在 Globe 上显示来自单个图像提供者的平铺图像数据。
      let imageryLayers = viewer.imageryLayers;

      let googleMap = new Cesium.UrlTemplateImageryProvider({
        url: "http://www.google.com/maps/vt?lyrs=s@716&x={x}&y={y}&z={z}",
      });

      // 使用给定的ImageryProvider创建一个新层，并将其添加到集合中。
      imageryLayers.addImageryProvider(googleMap);

      // 将相机从当前位置移动到新位置。
      viewer.camera.flyTo({
        // 摄像机在WGS84（世界）坐标中的最终位置或从上向下视图中可见的矩形。
        destination: Cesium.Cartesian3.fromDegrees(
          //从以度为单位的经度和纬度值返回Cartesian3位置。
          114.296063, //经度
          30.55245, //纬度
          20000000 //椭球上方的高度
        ),
        // 包含方向和向上属性或航向，俯仰和横滚属性的对象
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-90),
          roll: 0.0,
        },
        // 飞行持续时间（以秒为单位）
        duration: 10, // fly time 10s
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
