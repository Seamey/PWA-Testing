// import withPWA from 'next-pwa';

// let userConfig = undefined
// try {
//   userConfig = await import('./v0-user-next.config')
// } catch (e) {
//   // ignore error
// }

// /** @type {import('next').NextConfig} */
// const nextConfig = withPWA( {
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   experimental: {
//     webpackBuildWorker: true,
//     parallelServerBuildTraces: true,
//     parallelServerCompiles: true,
//   },
// },

// mergeConfig(nextConfig, userConfig),

// function mergeConfig(nextConfig, userConfig) {
//   if (!userConfig) {
//     return
//   }

//   for (const key in userConfig) {
//     if (
//       typeof nextConfig[key] === 'object' &&
//       !Array.isArray(nextConfig[key])
//     ) {
//       nextConfig[key] = {
//         ...nextConfig[key],
//         ...userConfig[key],
//       }
//     } else {
//       nextConfig[key] = userConfig[key]
//     }
//   }
// })

// export default nextConfig
import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

// Load user config dynamically
let userConfig = {};
try {
  const userConfigModule = await import('./v0-user-next.config.js');
  userConfig = userConfigModule.default || {};
} catch (e) {
  console.warn('No custom user config found or failed to load.');
}

function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) {
    return baseConfig;
  }

  const mergedConfig = { ...baseConfig };

  for (const key in userConfig) {
    if (typeof mergedConfig[key] === 'object' && !Array.isArray(mergedConfig[key])) {
      mergedConfig[key] = {
        ...mergedConfig[key],
        ...userConfig[key],
      };
    } else {
      mergedConfig[key] = userConfig[key];
    }
  }

  return mergedConfig;
}

const baseConfig = {
  // Next-PWA specific configuration
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
  
  // Next.js Configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const nextConfig = withPWA(mergeConfig(baseConfig, userConfig));

export default nextConfig;
