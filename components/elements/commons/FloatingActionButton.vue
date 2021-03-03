<template>
    <v-card id="create">
        <v-speed-dial
            v-model="fab"
            :top="top"
            :bottom="bottom"
            :right="right"
            :left="left"
            :direction="direction"
            :open-on-hover="hover"
            :transition="transition"
        >
            <template v-slot:activator>
                <v-btn v-model="fab" color="green darken-2" dark fab>
                    <v-icon v-if="fab">
                        mdi-close
                    </v-icon>
                    <v-icon v-else>
                        mdi-account-circle
                    </v-icon>
                </v-btn>
            </template>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab dark small color="#006AFF" v-bind="attrs" v-on="on">
                        <a href="https://msng.link/o/?zktecowa=fm"><v-icon>mdi-facebook-messenger</v-icon></a> 
                    </v-btn>
                </template>
                
                <span>messenger</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab dark small color="green" v-bind="attrs" v-on="on">
                        <a href="https://wa.me/2348175555514?text=I%20am%20interested%20in%20your%20product"><v-icon>fa fa-whatsapp</v-icon></a>
                    </v-btn>
                </template>
                <span>whatsapp</span>
            </v-tooltip>
            
        </v-speed-dial>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        direction: 'top',
        fab: true,
        fling: false,
        hover: true,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition'
    }),

    computed: {
        activeFab() {
            switch (this.tabs) {
                case 'one':
                    return { class: 'purple', icon: 'account_circle' };
                case 'two':
                    return { class: 'red', icon: 'edit' };
                case 'three':
                    return { class: 'green', icon: 'keyboard_arrow_up' };
                default:
                    return {};
            }
        }
    }
};
</script>

<style lang="scss">
#create .v-speed-dial {
    position: fixed;
}


#create .v-btn--floating {
    position: relative;
}

#create .v-speed-dial--bottom {
    bottom: 70px;
}

#create .v-speed-dial--right {
    right: 19px;
}

#create .v-speed-dial .v-icon {
    color: white;
}

</style>
