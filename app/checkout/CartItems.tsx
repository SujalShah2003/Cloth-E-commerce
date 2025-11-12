"use client";

import {
  Box,
  Text,
  Image,
  Group,
  Button,
  Divider,
  Select,
  ActionIcon,
  Table,
  ScrollArea,
  Tabs,
  Stack,
} from "@mantine/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import TitleHeader from "../common/TitleHeader";
import { toast } from "sonner";

const CartItems = () => {
  const { cart, removeFromCart, clearCart, updateQuantity, updateSize } =
    useCartStore();

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum +
      (item.selectedPrice ?? item.discountedPrice ?? item.price) *
        (item.quantity ?? 1),
    0
  );

  return (
    <>
      <Box bg="primary" p={{ base: 30, md: 50 }} pt={30}>
        <TitleHeader
          title=" Your Shopping Cart"
          description="  Review your selected items before proceeding to checkout."
        />
      </Box>
      <Box p={{base:30,md:50}}>
        {cart.length === 0 ? (
          <Stack ta="center" align="center" justify="center" py={60} h="40vh">
            <Text c="dimmed" fz="lg">
              Your cart is empty.
            </Text>
            <Button
              mt="lg"
              color="black"
              variant="outline"
              component={Link}
              w='max-content'
              href="/casual-outfit"
            >
              Browse Outfits
            </Button>
          </Stack>
        ) : (
          <>
            <ScrollArea type="auto" offsetScrollbars>
              <Box mt="xl" miw={700}>
                <Table
                  striped
                  highlightOnHover
                  withTableBorder
                  withColumnBorders
                  verticalSpacing="md"
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Product</Table.Th>
                      <Table.Th ta="center">Original Price</Table.Th>
                      <Table.Th ta="center">Discounted Price</Table.Th>
                      <Table.Th ta="center">Size</Table.Th>
                      <Table.Th ta="center">Quantity</Table.Th>
                      <Table.Th ta="center">Remove</Table.Th>
                    </Table.Tr>
                  </Table.Thead>

                  <Table.Tbody>
                    {cart.map((item) => (
                      <Table.Tr key={item.id}>
                        {/* Product */}
                        <Table.Td>
                          <Group>
                            <Image
                              src={item.image}
                              alt={item.title}
                              radius="md"
                              style={{
                                objectFit: "cover",
                                width: 60,
                                height: 60,
                              }}
                            />
                            <Box>
                              <Text fw={600}>{item.title}</Text>
                              <Text fz="sm" c="dimmed" lineClamp={1}>
                                {item.description}
                              </Text>
                            </Box>
                          </Group>
                        </Table.Td>

                        {/* Original Price */}
                        <Table.Td ta="center">
                          <Text fw={700}>
                            ₹{item.originalPrice?.toLocaleString()}
                          </Text>
                        </Table.Td>

                        {/* Discounted Price */}
                        <Table.Td ta="center">
                          {item.discount ? (
                            <Group gap={4} justify="center" align="center">
                              <Text fw={700} c="black">
                                ₹
                                {(
                                  item?.selectedPrice ?? item?.discountedPrice
                                ).toLocaleString()}
                              </Text>
                              <Text fz="xs" c="dimmed">
                                ({item.offerPercent}% OFF)
                              </Text>
                            </Group>
                          ) : (
                            <Text fw={700}>
                              ₹
                              {(
                                item.selectedPrice ?? item.price
                              ).toLocaleString()}
                            </Text>
                          )}
                        </Table.Td>

                        {/* Size Selector */}
                        <Table.Td ta="center">
                          <Group justify="center">
                            <Tabs
                              value={item.selectedSize}
                              onChange={(val) => updateSize(item.id, val!)}
                              variant="pills"
                              color="black"
                              radius="md"
                              className="flex flex-wrap justify-center"
                            >
                              <Tabs.List>
                                {item.variants.map((v) => (
                                  <Tabs.Tab
                                    key={v.size}
                                    value={v.size}
                                    className={`px-3 text-sm ${
                                      item.selectedSize === v.size
                                        ? "bg-black text-white"
                                        : "bg-gray-100 text-black hover:bg-gray-200"
                                    }`}
                                  >
                                    {v.size}
                                  </Tabs.Tab>
                                ))}
                              </Tabs.List>
                            </Tabs>
                          </Group>
                        </Table.Td>

                        {/* Quantity */}
                        <Table.Td ta="center">
                          <Group justify="center" align="center" wrap="nowrap">
                            <ActionIcon
                              variant="outline"
                              color="black"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  (item.quantity ?? 1) - 1
                                )
                              }
                            >
                              <IconMinus size={14} />
                            </ActionIcon>
                            <Text fw={600}>{item.quantity}</Text>
                            <ActionIcon
                              variant="outline"
                              color="black"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  (item.quantity ?? 1) + 1
                                )
                              }
                            >
                              <IconPlus size={14} />
                            </ActionIcon>
                          </Group>
                        </Table.Td>

                        {/* Remove */}
                        <Table.Td ta="center">
                          <ActionIcon
                            color="#ff0000ff"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <IconTrash size={16} />
                          </ActionIcon>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Box>
            </ScrollArea>

            <Divider my="lg" />

            {/* Footer */}
            <Group justify="space-between" mt="md">
              <Button variant="outline" color="black" onClick={clearCart}>
                Clear Cart
              </Button>
              <Group>
                <Text fw={700} fz="lg">
                  Grand Total: ₹{totalPrice.toLocaleString()}
                </Text>
                <Button
                  color="black"
                  onClick={() => {
                    clearCart()
                    toast.success("Thank You For Shop with Us")
                  }}
                >
                  Proceed to Payment
                </Button>
              </Group>
            </Group>
          </>
        )}
      </Box>
    </>
  );
};

export default CartItems;
