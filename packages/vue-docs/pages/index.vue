<template>
  <div class="index">
    <mat-banner-layout
      :background-gradient="['primary-light', 'primary']"
      type="full" color="primary-light">
      <div class="index-main">
        <mat-padding padding="15px 0">
          <mat-title
            :dark="true"
            color="primary-light" size="large">
            Materia JS
          </mat-title>
          <mat-spacer />
          <mat-title
            :dark="true"
            size="small" color="primary-light">
            Vue component framework
          </mat-title>
          <mat-spacer />
          <mat-spacer />
          <nuxt-link to="/install">
            <mat-button color="primary">
              Get started
            </mat-button>
          </nuxt-link>
          <mat-button @click.native="onClickGithub">
            <mat-fa prefix="fab" icon="github"></mat-fa >Github
          </mat-button>
        </mat-padding>
      </div>
    </mat-banner-layout>
    <div class="index-main">
      <mat-spacer />
      <mat-title size="small">
        Why Materia JS?
      </mat-title>
      <mat-spacer />
      <mat-margin margin="0 -15px">
        <mat-flex-layout class="index-main-items" flex-wrap="wrap">
          <mat-flex-item v-for="item in mainItems" flex="250px">
            <mat-padding>
              <mat-card
                padding="0"
                overflow="hidden"
                class="index-card"
              >
                <mat-image :src="item.imageSrc" />
                <mat-spacer />
                <mat-padding>
                  <mat-title size="xs">
                    {{ item.title }}
                  </mat-title>
                  <mat-spacer />
                  <mat-paragraph>
                    {{ item.body }}
                  </mat-paragraph>
                </mat-padding>
              </mat-card>
            </mat-padding>
          </mat-flex-item>
        </mat-flex-layout>
      </mat-margin>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  layout: 'home',
  data: () => ({
    mainItems: [
      {
        // eslint-disable-next-line
        imageSrc: require('~/assets/images/code.png'),
        title: 'Semantic markup',
        body: 'Sensible props and events allows the dev to understand the '
          + 'template clearly while having to consult the documentation as little as '
          + 'possible.',
      },
      {
        // eslint-disable-next-line
        imageSrc: require('~/assets/images/profile.png'),
        title: 'Modern and flexible components',
        body: 'Emphasis on user and dev friendliness, flexibility and beautiful design. '
          + 'All components work standalone or alongside each other.',
      },
      {
        // eslint-disable-next-line
        imageSrc: require('~/assets/images/install.png'),
        title: 'Quick to install',
        body: 'Can be added to your application in minutes. Allows for easy scaffolding of'
          + 'web pages and sites.',
      },
    ],
  }),
  methods: {
    onClickGithub() {
      this.$store.dispatch('materiajs/setThemeByName', 'green');
    },
  },
};
</script>

<style lang="scss" scoped>
  .index {
    &-main {
      max-width: 900px;
      margin: auto;
      padding: 60px 30px;
      @media screen and (max-width: 900px) {
        padding: 15px 30px;
      }
      &-items {
        /deep/ .mat-image {
          height: 140px;
          overflow: hidden;
          img {
            max-height: initial;
            width: 100%;
            align-self: baseline;
          }
        }
        .mat-flex-item, /deep/ .mat-padding-component {
          height: 100%;
        }
      }
    }
    &-card {
      margin: auto;
      max-width: 300px;
      height: 100%;
      min-height: 350px;
    }
    @media screen and (max-width: 600px) {
      &-card {
        max-width: 100%;
        width: 100%;
      }
      /deep/ .mat-image {
        height: 180px;
      }
    }
  }
</style>
