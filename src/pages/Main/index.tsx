import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import { IconNameType } from "../../types";
import { mainDescription, mainLabel } from "../../constants/labels";
import SvgImage from "../../components/SvgImage";

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          name={"ellipsis-horizontal-circle" as IconNameType}
          onPress={() => {}}
        />
      </View>
      <SvgImage />
      <View style={styles.description}>
        <Typography label={mainLabel} variant="primary" />
        <Typography
          style={{
            textAlign: "center",
          }}
          label={mainDescription}
          variant="secondary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    padding: 16,
  },
  description: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    height: 160,
  },
});

export default MainPage;
