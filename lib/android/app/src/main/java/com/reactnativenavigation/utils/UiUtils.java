package com.reactnativenavigation.utils;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.util.DisplayMetrics;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.WindowManager;

import com.reactnativenavigation.NavigationApplication;

public class UiUtils {
    public static final int STATUS_BAR_HEIGHT_M = 24;
    public static final int STATUS_BAR_HEIGHT_L = 25;
    private static int statusBarHeight = -1;

	public static void runOnPreDrawOnce(final View view, final Runnable task) {
        view.getViewTreeObserver().addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {
            @Override
            public boolean onPreDraw() {
                view.getViewTreeObserver().removeOnPreDrawListener(this);
                task.run();
                return true;
            }
        });
    }

	public static void tintDrawable(Drawable drawable, int tint) {
		drawable.setColorFilter(new PorterDuffColorFilter(tint, PorterDuff.Mode.SRC_IN));
	}

	public static void runOnMainThread(Runnable runnable) {
		new Handler(Looper.getMainLooper()).post(runnable);
	}

	public static float getWindowHeight(Context context) {
		DisplayMetrics metrics = new DisplayMetrics();
		WindowManager windowManager = (WindowManager) context.getSystemService(Context.WINDOW_SERVICE);
		if (windowManager != null) {
			windowManager.getDefaultDisplay().getMetrics(metrics);
		}
		return metrics.heightPixels;
	}

    public static int getStatusBarHeight(Context context) {
        if (statusBarHeight > 0) {
            return statusBarHeight;
        }
        final Resources resources = context.getResources();
        final int resourceId = resources.getIdentifier("status_bar_height", "dimen", "android");
        statusBarHeight = resourceId > 0 ?
                resources.getDimensionPixelSize(resourceId) :
                (int) dpToPx(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? STATUS_BAR_HEIGHT_M : STATUS_BAR_HEIGHT_L);
        return statusBarHeight;
    }

    public static float dpToPx(float dp) {
        float scale = NavigationApplication.instance.getResources().getDisplayMetrics().density;
        return dp * scale + 0.5f;
    }

}