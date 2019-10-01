<template>
  <material-card
    v-bind="$attrs"
    class="v-card--material-chart"
    v-on="$listeners"
  >
    <chartist
      slot="header"
      :data="data"
      :event-handlers="eventHandlers"
      :options="options"
      :ratio="ratio"
      :responsive-options="responsiveOptions"
      :type="type"
    />
    <slot />
    <slot
      slot="actions"
      name="actions"
    />
  </material-card>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    eventHandlers: {
      type: Array,
      default: () => ([])
    },
    options: {
      type: Object,
      default: () => ({})
    },
    ratio: {
      type: String,
      default: undefined
    },
    responsiveOptions: {
      type: Array,
      default: () => ([])
    },
    type: {
      type: String,
      required: true,
      validator: v => ['Bar', 'Line', 'Pie'].includes(v)
    }
  }
}
</script>

<style lang="scss">
  .v-card--material-chart {
    .v-card--material__header {
      .ct-label {
        color: inherit;
        opacity: .7;
        font-size: 0.975rem;
        font-weight: 100;
      }
      .ct-grid{
        stroke: rgba(255, 255, 255, 0.2);
      }
      .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut {
          stroke: rgba(255,255,255,.8);
      }
      .ct-series-a .ct-slice-pie,
      .ct-series-a .ct-area {
          fill: rgba(255,255,255,.4);
      }
    }
  }
  .ct-tooltip {
    position: absolute;
    display: inline-block;
    min-width: 5em;
    padding: 8px 10px;
    background: #383838;
    color: #fff;
    text-align: center;
    pointer-events: none;
    z-index: 100;
    transition: opacity .2s linear;
  }
  .ct-tooltip:before {
    position: absolute;
    bottom: -14px;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    pointer-events: none;
    border-color: rgba(251, 249, 228, 0);
    border-top-color: #383838;
    border-width: 7px;
    margin-left: -8px;
  }
  .ct-tooltip.hide {
    display: block;
    opacity: 0;
    visibility: hidden;
  }
  .ct-area, .ct-line {
    pointer-events: none;
  }
  .ct-square {
    margin-top: 30px;
    display: block;
    position: relative;
    width: 95% !important;
  }
  @media only screen and (max-width: 1400px) {
    .ct-legend {
      margin-top: 320px !important;
      position: absolute;
      z-index: 10;
      left: 0;
      list-style: none;
      text-align: left;
    }
  }
  @media only screen and (max-width: 600px) {
    .ct-legend {
      margin-top: 220px !important;
      position: absolute;
      z-index: 10;
      left: 0;
      list-style: none;
      text-align: left;
    }
    ol, ul {
        padding-left: 0px;
    }
    .theme--light.v-pagination .v-pagination__item {
      width: auto;
      min-width: 28px;
      height: 28px;
      margin: 2px !important;
      font-size: 12px !important;
    }
  }
  .ct-chart {
    position: relative;
  }
  .ct-legend {
    position: relative;
    z-index: 10;
    list-style: none;
    text-align: left;
  }
  .ct-legend li {
    position: relative;
    padding-left: 23px;
    margin-right: 10px;
    margin-bottom: 3px;
    cursor: pointer;
    display: inline-block;
  }
  .ct-legend li:before {
    margin-top: 5px;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0;
    content: '';
    border: 3px solid transparent;
    border-radius: 2px;
  }
  .ct-legend li.inactive:before {
    background: transparent;
  }
  .ct-legend.ct-legend-inside {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 23px;
  }
  .ct-legend.ct-legend-inside li{
    display: block;
    margin: 0;
  }
  .ct-legend .ct-series-0:before {
    background-color: #80DEEA;
    border-color: #80DEEA;
  }
  .ct-legend .ct-series-1:before {
    background-color: #00BCD4;
    border-color: #00BCD4;
  }
  .ct-legend .ct-series-2:before {
    background-color: #039BE5;
    border-color: #039BE5;
  }
  .ct-legend .ct-series-3:before {
    background-color: #1565C0;
    border-color: #1565C0;
  }
  .ct-legend .ct-series-4:before {
    background-color: #283593;
    border-color: #283593;
  }
  .ct-legend .ct-series-5:before {
    background-color: #1B5E20;
    border-color: #1B5E20;
  }
  .ct-legend .ct-series-6:before {
    background-color: #558B2F;
    border-color: #558B2F;
  }
  .ct-legend .ct-series-7:before {
    background-color: #8BC34A;
    border-color: #8BC34A;
  }
  .ct-legend .ct-series-8:before {
    background-color: #CCFF90;
    border-color: #CCFF90;
  }
  .ct-legend .ct-series-9:before {
    background-color: #C0CA33;
    border-color: #C0CA33;
  }
  .ct-legend .ct-series-10:before {
    background-color: #827717;
    border-color: #827717;
  }
  .ct-legend .ct-series-11:before {
    background-color: #4E342E;
    border-color: #4E342E;
  }
  .ct-legend .ct-series-12:before {
    background-color: #6D4C41;
    border-color: #6D4C41;
  }
  .ct-legend .ct-series-13:before {
    background-color: #BF360C;
    border-color: #BF360C;
  }
  .ct-legend .ct-series-14:before {
    background-color: #E53935;
    border-color: #E53935;
  }
  .ct-legend .ct-series-15:before {
    background-color: #FF5722;
    border-color: #FF5722;
  }
  .ct-legend .ct-series-16:before {
    background-color: #FB8C00;
    border-color: #FB8C00;
  }
  .ct-legend .ct-series-17:before {
    background-color: #FFC400;
    border-color: #FFC400;
  }
  .ct-legend .ct-series-18:before {
    background-color: #FFE57F;
    border-color: #FFE57F;
  }
  .ct-legend .ct-series-19:before {
    background-color: #FFF8E1;
    border-color: #FFF8E1;
  }
  .ct-legend .ct-series-20:before {
    background-color: #F48FB1;
    border-color: #F48FB1;
  }
  .ct-legend .ct-series-21:before {
    background-color: #EA80FC;
    border-color: #EA80FC;
  }
  .ct-legend .ct-series-22:before {
    background-color: #8E24AA;
    border-color: #8E24AA;
  }
  .ct-legend .ct-series-23:before {
    background-color: #4A148C;
    border-color: #4A148C;
  }
  .ct-legend .ct-series-24:before {
    background-color: #7986CB;
    border-color: #7986CB;
  }
  .ct-legend .ct-series-25:before {
    background-color: #8C9EFF;
    border-color: #8C9EFF;
  }
  .ct-series-a .ct-bar, .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut {
  stroke: #80DEEA !important
  }
  .ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut {
  stroke: #00BCD4 !important
  }
  .ct-series-c .ct-bar, .ct-series-c .ct-line, .ct-series-c .ct-point, .ct-series-c .ct-slice-donut {
  stroke: #039BE5 !important
  }
  .ct-series-d .ct-bar, .ct-series-d .ct-line, .ct-series-d .ct-point, .ct-series-d .ct-slice-donut {
  stroke: #1565C0 !important
  }
  .ct-series-e .ct-bar, .ct-series-e .ct-line, .ct-series-e .ct-point, .ct-series-e .ct-slice-donut {
  stroke: #283593 !important
  }
  .ct-series-f .ct-bar, .ct-series-f .ct-line, .ct-series-f .ct-point, .ct-series-f .ct-slice-donut {
  stroke: #1B5E20 !important
  }
  .ct-series-g .ct-bar, .ct-series-g .ct-line, .ct-series-g .ct-point, .ct-series-g .ct-slice-donut {
  stroke: #558B2F !important
  }
  .ct-series-h .ct-bar, .ct-series-h .ct-line, .ct-series-h .ct-point, .ct-series-h .ct-slice-donut {
  stroke: #8BC34A !important
  }
  .ct-series-i .ct-bar, .ct-series-i .ct-line, .ct-series-i .ct-point, .ct-series-i .ct-slice-donut {
  stroke: #CCFF90 !important
  }
  .ct-series-j .ct-bar, .ct-series-j .ct-line, .ct-series-j .ct-point, .ct-series-j .ct-slice-donut {
  stroke: #C0CA33 !important
  }
  .ct-series-k .ct-bar, .ct-series-k .ct-line, .ct-series-k .ct-point, .ct-series-k .ct-slice-donut {
  stroke: #827717 !important
  }
  .ct-series-l .ct-bar, .ct-series-l .ct-line, .ct-series-l .ct-point, .ct-series-l .ct-slice-donut {
  stroke: #4E342E !important
  }
  .ct-series-m .ct-bar, .ct-series-m .ct-line, .ct-series-m .ct-point, .ct-series-m .ct-slice-donut {
  stroke: #6D4C41 !important
  }
  .ct-series-n .ct-bar, .ct-series-n .ct-line, .ct-series-n .ct-point, .ct-series-n .ct-slice-donut {
  stroke: #BF360C !important
  }
  .ct-series-o .ct-bar, .ct-series-o .ct-line, .ct-series-o .ct-point, .ct-series-o .ct-slice-donut {
  stroke: #E53935 !important
  }
  .ct-series-p .ct-bar, .ct-series-p .ct-line, .ct-series-p .ct-point, .ct-series-p .ct-slice-donut {
  stroke: #FF5722
  }
  .ct-series-q .ct-bar, .ct-series-q .ct-line, .ct-series-q .ct-point, .ct-series-q .ct-slice-donut {
  stroke: #FB8C00
  }
  .ct-series-r .ct-bar, .ct-series-r .ct-line, .ct-series-r .ct-point, .ct-series-r .ct-slice-donut {
  stroke: #FFC400
  }
  .ct-series-s .ct-bar, .ct-series-s .ct-line, .ct-series-s .ct-point, .ct-series-s .ct-slice-donut {
  stroke: #FFE57F
  }
  .ct-series-t .ct-bar, .ct-series-t .ct-line, .ct-series-t .ct-point, .ct-series-t .ct-slice-donut {
  stroke: #FFF8E1
  }
  .ct-series-u .ct-bar, .ct-series-u .ct-line, .ct-series-u .ct-point, .ct-series-u .ct-slice-donut {
  stroke: #F48FB1
  }
  .ct-series-v .ct-bar, .ct-series-v .ct-line, .ct-series-v .ct-point, .ct-series-v .ct-slice-donut {
  stroke: #EA80FC
  }
  .ct-series-x .ct-bar, .ct-series-x .ct-line, .ct-series-x .ct-point, .ct-series-x .ct-slice-donut {
  stroke: #4A148C
  }
  .ct-series-y .ct-bar, .ct-series-y .ct-line, .ct-series-y .ct-point, .ct-series-y .ct-slice-donut {
  stroke: #7986CB
  }
  .ct-series-w .ct-bar, .ct-series-w .ct-line, .ct-series-w .ct-point, .ct-series-w .ct-slice-donut {
  stroke: #8E24AA
  }
  .ct-series-z .ct-bar, .ct-series-z .ct-line, .ct-series-z .ct-point, .ct-series-z .ct-slice-donut {
  stroke: #8C9EFF
  }
</style>
