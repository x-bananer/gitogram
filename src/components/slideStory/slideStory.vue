<template>
  <div class="c-slideStory">
    <div class="header">
      <div class="header__progress">
        <xProgress />
      </div>
      <div class="header__user">
        <avatar src="https://picsum.photos/300" class="profile" />
        <h3 class="header__title">React.reposit</h3>
      </div>
    </div>
    <div class="content">
      <div class="content__img">
        <img class="content__img-user" src="https://picsum.photos/300/300"/>
      </div>
      <div class="content__decs">
        <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check
        dotnet tool from CLI and follow the instructions.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and
        run apps. We expect Visual Studio for Mac .NET 6 support to begin
        arriving mid-year.</p>
        <p>In Preview 4 we enable push/pop navigation with
        NavigationPage. We added a concrete implementation of IWindow, and
        completed porting ContentPage from Xamarin.Forms</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and
        run apps. We expect Visual Studio for Mac .NET 6 support to begin
        arriving mid-year.</p>
      </div>
    </div>
    <div class="footer">
      <xButton hover-text="Unfollow">Follow</xButton>
    </div>
  </div>
</template>

<script>
import progress from '../progress/progress.vue'
import button from '../button/button.vue'
import avatar from '../avatar/avatar.vue'

export default {
  name: 'Slide Story',
  components: {
    xProgress: progress,
    xButton: button,
    avatar
  }
}
</script>

 <style lang="scss" scoped src="./slideStory.scss">
 </style>
