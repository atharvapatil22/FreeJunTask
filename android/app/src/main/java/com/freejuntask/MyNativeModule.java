package com.freejuntask;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class MyNativeModule extends ReactContextBaseJavaModule {
    MyNativeModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName(){
        return "MyNativeModule";
    }

    @ReactMethod
    public void getSum(int x,int y, Callback callback){
        Log.d("My Module","log from my module");
        callback.invoke(x+y);
    }
}