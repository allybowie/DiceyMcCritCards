import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import CriticalFumbleDeck from "../data/CriticalFumbleDeck.json"
import CritFumbleCard from "../components/CritFumbleCard/CritFumbleCard.vue"



storiesOf("Crit Fumble Card", module)
  .addParameters()
  .add("Default", () => ({
      data() {
        return {
            critCard: CriticalFumbleDeck.Cards[1]
        }
      },
    components: {
      CritFumbleCard
    },
    template: `
        <div>
          <CritFumbleCard :card="critCard"/>
        </div>`
  }));
