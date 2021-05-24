package com.app_stream;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class OpenAndroid extends ReactContextBaseJavaModule {

    OpenAndroid(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ActivityOpen";
    }

    @ReactMethod
    void navigateToWatch(String stream_id) {
        Log.d("CalendarModule", "Create event called with name: " + stream_id);
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, PlayActivityV2.class);
        intent.putExtra("streamId",stream_id);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }

}