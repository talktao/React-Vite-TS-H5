import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		// css模块化，文件以.module.[css|less|scss]结尾，否则不生效的
		modules: {
			/**
			 * 配置 CSS modules 的行为。选项将被传递给 postcss-modules。
			 * 默认：'camelCaseOnly'。
			 * 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'
			 * */
			localsConvention: 'dashesOnly'
		},
		preprocessorOptions: {
			// 预编译支持less
			less: {
				javascriptEnabled: true,
			}
		}
	},
	plugins: [react()],
	server: {
		host: '0.0.0.0'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
});
