<template>
  <div class="card-grid">
    <md-card>
      <md-card-header>
        <md-avatar>
          <img src="//placehold.it/40x40" alt="avatar">
        </md-avatar>
        <div class="md-title">john.doe@example.com is bouncing!</div>
        <div class="md-subhead">Bounced 3 times since 12 jan. 17'</div>
      </md-card-header>
      <md-card-actions>
        <md-button>Review</md-button>
        <md-button>Ignore</md-button>
        <span style="flex: 1;"></span>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-content>
        <span class="deploy">3 subscriptions pending</span>
      </md-card-content>
      <md-card-actions>
        <md-list>
          <md-divider></md-divider>
          <md-list-item>
            <span class="deploy-title">View pending subscriptions</span>
            <md-list-expand>
              <md-list>
                <md-list-item>
                  <md-avatar>
                    <img src="//placehold.it/40x40" alt="avatar">
                  </md-avatar>
                  <div class="md-list-text-container">
                    <span>Subscriber 1</span>
                  </div>
                  <div class="md-list-action">
                    <md-button class="md-icon-button">
                      <md-icon>check</md-icon>
                    </md-button>
                    <md-button class="md-icon-button">
                      <md-icon>deletet</md-icon>
                    </md-button>
                  </div>
                </md-list-item>
                <md-list-item>
                  <md-avatar>
                    <img src="//placehold.it/40x40" alt="avatar">
                  </md-avatar>
                  <div class="md-list-text-container">
                    <span>Subscriber 2</span>
                  </div>
                  <div class="md-list-action">
                    <md-button class="md-icon-button">
                      <md-icon>check</md-icon>
                    </md-button>
                    <md-button class="md-icon-button">
                      <md-icon>deletet</md-icon>
                    </md-button>
                  </div>
                </md-list-item>
                <md-list-item>
                  <md-avatar>
                    <img src="//placehold.it/40x40" alt="avatar">
                  </md-avatar>
                  <div class="md-list-text-container">
                    <span>Subscriber 3</span>
                  </div>
                  <div class="md-list-action">
                    <md-button class="md-icon-button">
                      <md-icon>check</md-icon>
                    </md-button>
                    <md-button class="md-icon-button">
                      <md-icon>deletet</md-icon>
                    </md-button>
                  </div>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>
        </md-list>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-content>
        <span>Members</span>
        <span class="stat">384</span>
        <span><span class="positive-stat">+12</span> this month</span>
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-content>
        <span>Bounces</span>
        <span class="stat">12</span>
        <span>3.1% of all members</span>
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-content>
        <span>Messages</span>
        <span class="stat">1.33k</span>
        <span><span class="positive-stat">183</span> this month</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'listmaster',
};
</script>

<style scoped>
.card-grid {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.md-card {
  margin: 5px;
}
.deploy {
  font-size: 24px;
  display: block;
  margin: 5px auto -10px auto;
}
.stat {
  display: block;
  margin: 5px 0;
  font-size: 32px;
}
.positive-stat {
  color: #65A026;
}
.md-list {
  width: 100%;
}
.deploy-title {
  text-transform: uppercase;
  color: #787878;
}
</style>

