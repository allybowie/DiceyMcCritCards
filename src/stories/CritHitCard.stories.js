import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import CriticalHitDeck from "../data/CriticalHitDeck.json"
import CritHitCard from "../components/CritHitCard/CritHitCard.vue"



storiesOf("Crit Hit Card", module)
  .addParameters()
  .add("Default", () => ({
      data() {
        return {
            critCard: CriticalHitDeck.Cards[11]
        }
      },
    components: {
        CritHitCard
    },
    template: `
        <div>
          <CritHitCard :card="critCard"/>
        </div>`
  }));
