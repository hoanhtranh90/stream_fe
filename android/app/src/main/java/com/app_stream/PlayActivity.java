//package com.app_stream;
//
//import android.app.Activity;
//import android.app.ProgressDialog;
//import android.content.Intent;
//import android.media.MediaPlayer;
//import android.net.Uri;
//import android.os.Bundle;
//import android.view.View;
//import android.widget.MediaController;
//import android.widget.Toast;
//
//import com.devbrackets.android.exomedia.listener.OnPreparedListener;
//import com.devbrackets.android.exomedia.ui.widget.VideoView;
//import com.facebook.react.PackageList;
//import com.facebook.react.ReactActivity;
//import com.facebook.react.ReactInstanceManager;
//import com.facebook.react.ReactPackage;
//import com.facebook.react.ReactRootView;
//import com.facebook.react.common.LifecycleState;
//import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
//import com.facebook.soloader.SoLoader;
//
//import java.util.List;
//
//public class PlayActivity extends ReactActivity {
//    private VideoView videoView;
//
////    @Override
////    protected void onCreate(Bundle savedInstanceState) {
////        super.onCreate(savedInstanceState);
////        setContentView(R.layout.fragment_face_capture);
////        Intent intent = getIntent();
////        String key = intent.getStringExtra("streamId");
////
////        runOnUiThread(new Runnable() {
////
////            @Override
////            public void run() {
////                videoView = (VideoView)findViewById(R.id.video_view);
////                videoView.setVideoURI(Uri.parse(key));
////                videoView.requestFocus();
////                videoView.postInvalidateDelayed(200);
////                videoView.start();
////
////            }
////        });
////
////
////    }
////
////    @Override
////    public void onBackPressed() {
////
////        if (videoView.isPlaying()) {
////            videoView.setVisibility(View.GONE);
////        } else {
////            super.onBackPressed();
////        }
////    }
////
////}
//
//
//
//    private static ProgressDialog progressdialog;
//    private String path;
//
//    @Override
//    public void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.fragment_face_capture);
//        Intent intent = getIntent();
//        String key = intent.getStringExtra("streamId");
//
//        progressdialog = ProgressDialog.show(this, "", " Video Loading...", true);
//        progressdialog.setCancelable(true);
//
//        videoView = (VideoView) findViewById(R.id.video_view);
//        MediaController mediaController = new MediaController(this);
//        mediaController.setAnchorView(videoView);
//        videoView.setVideoURI(Uri.parse(key));
////        videoView.setControls();
//        runOnUiThread(new Runnable() {
//
//            @Override
//            public void run() {
//                videoView.postInvalidateDelayed(200);
//                videoView.start(); }
//
//        });
//        videoView.setOnPreparedListener(new OnPreparedListener() {
//            @Override
//            public void onPrepared() {
//                progressdialog.dismiss();
//                videoView.requestFocus();
//            }
//        });
//    }
//
//    @Override
//    public void onBackPressed() {
//        // TODO Auto-generated method stub
//        super.onBackPressed();
//        super.finish();
//
//    }
//
//}