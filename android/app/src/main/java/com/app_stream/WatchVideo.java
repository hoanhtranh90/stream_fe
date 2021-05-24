package com.app_stream;

import android.content.Context;
import android.net.Uri;
import android.util.Log;
import android.view.LayoutInflater;
import android.widget.FrameLayout;
import android.widget.MediaController;
import android.widget.TextView;

import androidx.annotation.NonNull;

import com.devbrackets.android.exomedia.listener.OnPreparedListener;
import com.devbrackets.android.exomedia.ui.widget.VideoControls;
import com.devbrackets.android.exomedia.ui.widget.VideoView;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

import java.util.Map;
import java.util.HashMap;

public class WatchVideo extends SimpleViewManager<FrameLayout> {

//    public static final String REACT_CLASS = "WatchVideo";
//
//    @Override
//    public String getName() {
//        return REACT_CLASS;
//    }
//
//    @Override
//    protected TextView createViewInstance(ThemedReactContext reactContext) {
//        TextView tv = new TextView(reactContext);
//        tv.setText("hello from android !");
//        return tv;
//    }
    private VideoView videoView;
    private MediaController mediaController;
    @NonNull
    @Override
    public String getName() {
        return "WatchVideo";
    }
    @NonNull
    @Override
    protected FrameLayout createViewInstance(@NonNull ThemedReactContext reactContext){
     // Set the videoView that acts as the anchor for the MediaController.
//        VideoControls controls = videoView.getVideoControls(); controls.setNextButtonEnabled(true); controls.setPreviousButtonEnabled(true);
        LayoutInflater inflater = (LayoutInflater)reactContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        FrameLayout frameLayout = (FrameLayout) inflater.inflate(R.layout.fragment_face_capture,null);
        videoView = frameLayout.findViewById(R.id.video_view);
        videoView.setVideoURI(Uri.parse("https://media.inspirahub.id/trailer/3/1591269758129847909689/hls/index_1080.m3u8"));
        videoView.requestFocus();
        videoView.start();
        videoView.postInvalidateDelayed(100);
        new Thread(new Runnable() {
            public void run() {
                videoView.start();

            }
        }).start();
        return frameLayout;

    }

}

