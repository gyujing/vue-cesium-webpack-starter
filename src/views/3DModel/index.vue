<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import "cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from "cesium";

export default {
  name: "3DModel",
  data() {
    return {
      viewer: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.viewer = new Cesium.Viewer("cesiumContainer", {
        infoBox: false, //获取信息框
        selectionIndicator: false, //获取选择指示器。
        shadows: true, //确定阴影是否由太阳投射。
        shouldAnimate: true,
      });
      this.createModel("../../assets/models/CesiumAir/Cesium_Air.glb", 5000.0);
    },
    createModel(url, height) {
      this.viewer.entities.removeAll();

      const position = Cesium.Cartesian3.fromDegrees(
        -123.0744619,
        44.0503706,
        height
      );
      const heading = Cesium.Math.toRadians(135); //航向
      const pitch = 0; //俯仰角度
      const roll = 0; //横滚角度
      // HeadingPitchRoll：旋转表示为航向，俯仰和横滚，都以弧度
      const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
      const orientation = Cesium.Transforms.headingPitchRollQuaternion(
        position, // 飞机位置
        hpr // 飞机 航向，俯仰和横滚形式
      );

      const entity = this.viewer.entities.add({
        name: "3DModel",
        position: position, //指定实体位置的属性。
        orientation: orientation, //实体方向的属性。
        model: {
          uri: url,
          minimumPixelSize: 128, //指定模型的最小最小像素大小
          maximumScale: 20000, //模型的最大比例尺大小。 minimumPixelSize的上限。
        },
      });
      this.viewer.trackedEntity = entity;
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
