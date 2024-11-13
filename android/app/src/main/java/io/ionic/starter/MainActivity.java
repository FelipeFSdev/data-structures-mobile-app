package io.ionic.starter;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Registra o plugin do GoogleAuth
    // this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {
    // {
    // add(GoogleAuth.class);
    // }
    // });
  }
}
