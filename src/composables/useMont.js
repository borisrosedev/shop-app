import { onMounted, onUnmounted } from "vue"

export const useMount = ({ name }) => {

    onMounted(() => {
        console.log(`Component ${name} has mounted `)
    })

    onUnmounted(() => {
        console.log(`Component ${name} has unmounted `)
    })
   

}