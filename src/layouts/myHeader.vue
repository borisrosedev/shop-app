<template>
  <header class="app__header">
    <figure>
      <img src="../assets/coffee.png" alt="logo de Boris Shop" />
    </figure>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">
            <font-awesome-icon :icon="['fas', 'house']" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/shop">
            <font-awesome-icon :icon="['fas', 'store']" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login">
            <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped lang="scss">

$primary-color: rgb(250, 183, 0);

@mixin FlexBox($dir: row, $align: flex-start, $justif: flex-start) {
  display: flex;
  flex-direction: $dir;
  justify-content: $justif;
  align-items: $align;
}

@mixin Circle($r: 50px) {
  width: $r;
  height: $r;
  overflow: hidden;
  border-radius: 50%;
}
.app__header {
  @include FlexBox(row, center, space-between);
    box-shadow: 1px 1px 5px gray;
  height: 8vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px 0;
  background-color: $primary-color;
  opacity: 0;
  animation: headerDown 1000ms ease-in-out forwards;


  figure {
    @include Circle();
    opacity: 0;
    animation: cupMoveUpDown 1000ms ease-in-out 1000ms forwards;
  }

  nav {
    display: flex;
    ul {
      @include FlexBox(row, center);

      li {
        margin-inline: 10px;
        opacity: 0;
        animation: navIconRight 1000ms ease-in-out 1000ms forwards;
      }
    }
  }
}

@keyframes headerDown {
    from {
        opacity: 0;
        transform: translateY(-300px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


@keyframes navIconRight {

    from {
        opacity: 0;
        transform: translateX(300px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes cupMoveUpDown {
    from {
        opacity: 0;
        transform: translateY(-100px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
    
}
</style>
