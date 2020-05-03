import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import EffectCard from "../components/EffectsCard/EffectsCard.vue"
import CriticalHitDeck from "../data/CriticalHitDeck.json"



storiesOf("Effect Card", module)
  .addParameters()
  .add("Default", () => ({
      data() {
        return {
            effectCard: CriticalHitDeck.Cards[1].Slashing,
            category: "Slashing"
        }
      },
    components: {
        EffectCard
    },
    template: `
        <div>
          <EffectCard :info="effectCard" :type="category"/>
        </div>`
  }));
