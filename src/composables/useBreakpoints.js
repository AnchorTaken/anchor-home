// useBreakpoints.js
import {ref, computed, onMounted, onUnmounted} from 'vue';

export function useBreakpoints(){
  const breakpoints = ref({
    mobile: false,
    tablet: false,
    smallDesktop: false,
    largeDesktop: false,
  });

  const breakpointValues = {
    mobile: 576,
    tablet: 768,
    smallDesktop: 992,
    largeDesktop: 1200,
  };

  const updateBreakpoints = () => {
    const windowWidth = window.innerWidth;
    breakpoints.value.mobile = windowWidth < breakpointValues.mobile;
    breakpoints.value.tablet = windowWidth >= breakpointValues.mobile && windowWidth < breakpointValues.tablet;
    breakpoints.value.smallDesktop = windowWidth >= breakpointValues.tablet && windowWidth < breakpointValues.smallDesktop;
    breakpoints.value.largeDesktop = windowWidth >= breakpointValues.smallDesktop;
  };

  const currentBreakpoint = computed(() => {
    if (breakpoints.value.mobile) return 'mobile';
    if (breakpoints.value.tablet) return 'tablet';
    if (breakpoints.value.smallDesktop) return 'smallDesktop';
    if (breakpoints.value.largeDesktop) return 'largeDesktop';
    return 'unknown';
  });

  onMounted(() => {
    updateBreakpoints();
    window.addEventListener('resize', updateBreakpoints);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints);
  });

  return {
    breakpoints,
    currentBreakpoint,
  };
}