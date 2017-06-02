<template>
  <div class="card-grid">

    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__supporting-text card-content">
        <div class="deploy">3 subscriptions pending</div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <expand-list>
          <div>
            <span class="deploy-title">View pending subscriptions</span>
          </div>
          <div slot="expand">
            <div class="mdl-list__item mdl-list__item">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>Aaron Paul</span>
              </span>
              <span class="mdl-list__item-secondary-content">
                <div>
                  <mdl-button icon="check"></mdl-button>
                  <mdl-button icon="delete"></mdl-button>
                </div>
              </span>
            </div>

            <div class="mdl-list__item mdl-list__item">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>Aaron Paul</span>
              </span>
              <span class="mdl-list__item-secondary-content">
                <div>
                  <mdl-button icon="check"></mdl-button>
                  <mdl-button icon="delete"></mdl-button>
                </div>
              </span>
            </div>

            <div class="mdl-list__item mdl-list__item">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>Aaron Paul</span>
              </span>
              <span class="mdl-list__item-secondary-content">
                <div>
                  <mdl-button icon="check"></mdl-button>
                  <mdl-button icon="delete"></mdl-button>
                </div>
              </span>
            </div>
          </div>
        </expand-list>
      </div>
    </div>

    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-list">
        <div class="mdl-list__item mdl-list__item--two-line">
          <span class="mdl-list__item-primary-content">
            <img src="//placehold.it/40x40" class="mdl-list__item-avatar" alt="avatar">
            <span>john.doe@example.com is bouncing!</span>
            <span class="mdl-list__item-sub-title">Bounced 3 times since 12 jan. 17'</span>
          </span>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <mdl-button>Review</mdl-button>
        <mdl-button>Ignore</mdl-button>
      </div>
    </div>

    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__supporting-text card-content">
        <span>Members</span>
        <span class="stat">384</span>
        <span><span class="positive-stat">+12</span> this month</span>
      </div>
    </div>

    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__supporting-text card-content">
        <span>Bounces</span>
        <span class="stat">12</span>
        <span>3.1% of all members</span>
      </div>
    </div>

    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__supporting-text card-content">
        <span>Messages</span>
        <span class="stat">1.33k</span>
        <span><span class="positive-stat">183</span> this month</span>
      </div>
    </div>
  </div>
</template>

<script>
import ExpandList from '@/components/layout/ExpandList.vue';

export default {
  name: 'listmaster',
  components: {
    ExpandList,
  },
};
</script>

<style scoped>
.card-content {
  color: #000;
}
.card-grid {
  padding: 16px;
}
.deploy {
  font-size: 24px;
  display: block;
  padding: 16px;
}
.stat {
  display: block;
  margin: 12px 0;
  font-size: 32px;
}
.positive-stat {
  color: #65A026;
}
.deploy-title {
  text-transform: uppercase;
  color: #787878;
}
</style>

