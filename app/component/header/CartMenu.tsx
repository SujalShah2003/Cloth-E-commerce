"use client";

import { useState } from "react";
import {
  Menu,
  Group,
  Avatar,
  Text,
  Image,
  Box,
  Button,
  Divider,
  Grid,
} from "@mantine/core";
import { IconShoppingBag, IconTrash } from "@tabler/icons-react";
import { useCartStore } from "@/app/store/cartStore";

const CartMenu = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const [opened, setOpened] = useState(false);

  const itemCount = cart.length;
  const slicedCart = cart.slice(0, 5);
  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      position="bottom-end"
      width={350}
      shadow="md"
      withArrow
      arrowSize={10}
    >
      <Menu.Target>
        <Group gap={4} style={{ cursor: "pointer" }}>
          <IconShoppingBag size={20} />
          <Text fw={600}>
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </Text>
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        {cart.length === 0 ? (
          <Text c="dimmed" ta="center" py={20}>
            Your cart is empty
          </Text>
        ) : (
          <>
            {slicedCart.map((item) => (
              <Grid key={item.id} p="sm" align="center" justify="space-between">
                <Grid.Col span={3}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    radius="sm"
                    style={{ objectFit: "cover" }}
                  />
                </Grid.Col>
                <Grid.Col span={7}>
                  <Box>
                    <Text fw={500} fz="lg">
                      {item.title}
                    </Text>
                    <Text fz="sm" c="dimmed" truncate="end">
                      {item.description}
                    </Text>
                    <Group my="xs">
                      <Text fz="sm" fw={600}>
                        Size: {item.selectedSize ?? "Default"}
                      </Text>
                      <Text fz="sm" fw={600}>
                        Price : ₹ {item.discountedPrice ?? item.price}
                      </Text>
                    </Group>
                  </Box>
                </Grid.Col>
                <Grid.Col span={2}>
                  <IconTrash
                    size={18}
                    style={{ cursor: "pointer" }}
                    onClick={() => removeFromCart(item.id)}
                  />
                </Grid.Col>
              </Grid>
            ))}

            <Divider my="sm" />
            <Group justify="space-between" p="sm">
              <Button
                color="black"
                variant="outline"
                size="xs"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button color="black" size="xs">
                Checkout
              </Button>
            </Group>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default CartMenu;
