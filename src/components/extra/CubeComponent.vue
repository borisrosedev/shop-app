<template>
  <div class="cube">
    <div class="cube__face cube__face--front">
        <img src="../../assets/painting.png">
    </div>
    <div class="cube__face cube__face--back">
      <img src="../../assets/paint-palette.png">
    </div>
    <div class="cube__face cube__face--left">
      <img src="../../assets/inspiration.png">
    </div>
    <div class="cube__face cube__face--right">
      <img src="../../assets/palette.png">
    </div>
    <div class="cube__face cube__face--top">
      <img src="../../assets/photo.png">
    </div>
    <div class="cube__face cube__face--bottom">
      <img src="../../assets/art-abstrait.png">
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>


@keyframes cube-spinning {
    0% {
        transform: rotateX(45deg) rotateY(45deg);
    }


    100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

@mixin face($size, $radius: 0, $ft-size: 24px) {
  width: $size;
  height: $size;
  position: absolute;
  border: solid 1px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $ft-size;
  background-color: var(--primary-color);

  @if $radius != 0 {
    border-radius: $radius;
  }
}

@mixin keyframeMixin($face, $time: 1s, $delay: 1s) {
  animation-duration: $time;
  animation-delay: $delay;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: #{$face};

  @if $face == "front" {
    @keyframes front {
      from {
        transform: translateZ(100px);
      }

      to {
        transform: translateZ(50px);
      }
    }
  }

  @if $face == "back" {
    @keyframes back {
      from {
        transform: translateZ(-100px);
      }

      to {
        transform: translateZ(-50px);
      }
    }
  }

  @if $face == "left" {
    @keyframes left {
      from {
        transform: rotateY(90deg) translateZ(-100px);
      }

      to {
        transform: rotateY(90deg) translateZ(-50px);
      }
    }
  }

  @if $face == "right" {
    @keyframes right {
      from {
        transform: rotateY(90deg) translateZ(100px);
      }

      to {
        transform: rotateY(90deg) translateZ(50px);
      }
    }
  }

  @if $face == "top" {
    @keyframes top {
      from {
        transform: rotateX(90deg) translateZ(100px);
      }

      to {
        transform: rotateX(90deg) translateZ(50px);
      }
    }
  }

  @if $face == "bottom" {
    @keyframes bottom {
      from {
        transform: rotateX(90deg) translateZ(-100px);
      }

      to {
        transform: rotateX(90deg) translateZ(-50px);
      }
    }
  }
}

.cube {
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  animation: cube-spinning 2000ms ease-in-out 1000ms both;
  display: flex;
  align-items: center;
  justify-content: center;
  &__face {
    @include face(100px, 0);

    &--front {
   
      transform: translateZ(100px);
      @include keyframeMixin("front");
      background-image: url("../../assets/coffee.png");
      background-color: unset;
    }

    &--back {
      transform: translateZ(-100px);
      @include keyframeMixin("back");
    }

    &--top {
      transform: rotateX(90deg) translateZ(100px);
      @include keyframeMixin("top");
    }

    &--bottom {
      transform: rotateX(90deg) translateZ(-100px);
      @include keyframeMixin("bottom");
    }

    &--left {
      transform: rotateY(90deg) translateZ(-100px);
      @include keyframeMixin("left");
    }

    &--right {
      transform: rotateY(90deg) translateZ(100px);
      @include keyframeMixin("right");
    }
  }
}
</style>
